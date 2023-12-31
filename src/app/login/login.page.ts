import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { DBTaskService } from '../services/dbtask.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private router: Router,private toastController: ToastController,private dbTask:DBTaskService,private navCtrl: NavController) { }

  ngOnInit() {
  }
  checkUserLength(name: string){
    let mensaje='';
    let estado = true;
    if (name.length<3){
      mensaje = "El minimo de caracteres para nombre es 3"
      estado = false;
    }else if (name.length>8){
      mensaje = "El maximo de caracteres para nombre es 8"
      estado = false;
    }
    return {estado, mensaje};
  }

  checkAlphanumeric(name: string){
    let mensaje = '';
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]+$/;
    let estado = regex.test(name);

    if (!estado){
      mensaje='Usuario no es alfanumerico';
    }
    return {estado,mensaje}
  }

  checkPassNumbers(pass: string){
    let regex = /^[0-9]+$/;
    let estado = regex.test(pass);
    let mensaje = '';

    if (!estado){
      mensaje = 'La contraseña solo deben ser numeros.'
      return {estado,mensaje}
    }else if(estado){
      return {estado,mensaje}
    }
    return {estado,mensaje};
  }

  async login(){
    var user = this.username;
    var pass = this.password;
    var resultado;
    resultado=this.checkUserLength(user);
    if(!resultado.estado){
      this.username='';
      this.mostrarToast(resultado.mensaje);
      return;
    }
    resultado=this.checkAlphanumeric(user);
    if(!resultado.estado){
      this.username='';
      this.mostrarToast(resultado.mensaje);
      return;
    }
    resultado=this.checkPassNumbers(pass);
    if(!resultado.estado){
      this.password='';
      this.mostrarToast(resultado.mensaje);
      return;
    }
    var userObject = [{
      username: this.username,
      password: this.password
    }];

    let foundUser = await this.dbTask.returnOneUser(userObject);
    if(foundUser== null){
      this.mostrarToast("Usuario No Existe");
      this.username='';
      this.password='';
      return;
    }
    if (this.password==foundUser.password){
      this.mostrarToast('Usuario Logeado Exitosamente');
      this.router.navigate(['./main-page']);
      let json = localStorage.setItem('username',user);
      this.navCtrl.navigateForward(`/main-page/${user}`);
    }


  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000, // Duración en milisegundos
      position: 'bottom' // Posición del Toast: 'top', 'middle', 'bottom'
    });
    await toast.present();
  }

}

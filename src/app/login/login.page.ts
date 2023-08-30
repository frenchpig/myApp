import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController,private toastController: ToastController) { }

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

  recuperarDatos(){
    let estado1 = false;
    let estado2 = false;
    let estado3 = false;
    let estadoTotal = false;
    let username = this.username;
    let password = this.password;
    let mensaje = 'Login Exitoso!';
    //Comprobacion 1
    let resultados = this.checkUserLength(username);
    estado1 = resultados.estado;
    if(!estado1){
      mensaje = resultados.mensaje;
      this.mostrarToast(estado1,mensaje);
      return;
    }
    //Comprobacion 2
    resultados = this.checkPassNumbers(password);
    estado2 = resultados.estado;
    if(!estado2){
      mensaje = resultados.mensaje;
      this.mostrarToast(estado2,mensaje);
      return;
    }
    //Comprobacion 3
    resultados = this.checkAlphanumeric(username);
    estado3 = resultados.estado;
    if (!estado3){
      mensaje = resultados.mensaje;
      this.mostrarToast(estado3,mensaje);
      return;
    }
    //Login
    if (estado1 && estado2 && estado3){
      estadoTotal = true;
      this.mostrarToast(estadoTotal,mensaje);
    }
  }

  async mostrarToast(valor: boolean,mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000, // Duración en milisegundos
      position: 'bottom' // Posición del Toast: 'top', 'middle', 'bottom'
    });
    await toast.present();
    if (valor==true){
      setTimeout(() => {
        let username = this.username;
        this.username = '';
        this.password = '';
        this.navCtrl.navigateForward(`/main-page/${username}`);

      }, 3000);
    }else{
      this.username = '';
      this.password = '';
    }

  }

}

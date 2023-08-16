import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private router: Router,private toastController: ToastController) { }

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

  checkPassNumbers(pass: string){
    let regex = /^[0-9]+$/;
    let estado = regex.test(pass);
    let mensaje = '';
    if (estado==false){
      mensaje = 'La contraseña solo deben ser numeros.'
      return {estado,mensaje}
    }else if(estado==true){
      return {estado,mensaje}
    }
    return {estado,mensaje};
  }

  recuperarDatos(){
    let estado1 = false;
    let estado2 = false;
    let estadoTotal = false;
    let username = this.username;
    let password = this.password;
    let mensaje = 'Login Exitoso!';
    let resultados = this.checkUserLength(username);
    estado1 = resultados.estado;
    if(estado1==false){
      mensaje = resultados.mensaje;
      this.mostrarToast(estado1,mensaje);
      return;
    }
    resultados = this.checkPassNumbers(password);
    estado2 = resultados.estado;
    if(estado2==false){
      mensaje = resultados.mensaje;
      this.mostrarToast(estado2,mensaje);
      return;
    }
    if (this.username == 'admin' && this.password == '1234'){
      estadoTotal = true;
      this.mostrarToast(estadoTotal,mensaje);
    }else{
      mensaje = 'Credenciales Incorrectas'
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
        this.username = '';
        this.password = '';
        this.router.navigate(['./home']);
      }, 3000);
    }else{
      this.username = '';
      this.password = '';
    }

  }

}

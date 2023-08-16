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
  transformToAsterisks(value: string): string {
    if (typeof value === 'string') {
      return value.replace(/[0-9]/g, '*');
    }
    return '';
  }

  onInputChange(event: any) {
    this.password = event.detail.value;
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

  recuperarDatos(){
    let estado = false;
    let username = this.username;
    let password = this.password;
    let mensaje;
    let resultados = this.checkUserLength(username);
    estado = resultados.estado;
    mensaje = resultados.mensaje;
    if(estado==false){
      this.mostrarToast(estado,mensaje);
      return;
    }
    console.log(username,password);

    // if (this.username == 'admin' && this.password == '1234'){
    //   estado = true;
    //   this.mostrarToast(estado);
    // }else{
    //   this.mostrarToast(estado);
    // }
  }

  async mostrarToast(valor: boolean,mensaje: string) {
    const toast = await this.toastController.create({
      message: '¡Toast de ejemplo!',
      duration: 3000, // Duración en milisegundos
      position: 'bottom' // Posición del Toast: 'top', 'middle', 'bottom'
    });
    if (valor==true){
      toast.message=mensaje;
    }else{
      toast.message=mensaje;
    }
    await toast.present();

    setTimeout(() => {
      this.username = '';
      this.password = '';
      //this.router.navigate(['./home']);
    }, 3000);
  }

}

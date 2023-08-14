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

  recuperarDatos(){
    let estado = false;
    if (this.username == 'admin' && this.password == 'admin123'){
      estado = true;
      this.mostrarToast(estado);
    }else{
      this.mostrarToast(estado);
    }
  }

  async mostrarToast(valor: boolean) {
    const toast = await this.toastController.create({
      message: '¡Toast de ejemplo!',
      duration: 3000, // Duración en milisegundos
      position: 'bottom' // Posición del Toast: 'top', 'middle', 'bottom'
    });
    if (valor==true){
      toast.message='Login Exitoso';
    }else{
      toast.message='Credenciales Erroneas';
    }
    await toast.present();

    setTimeout(() => {
      this.username = '';
      this.password = '';
      this.router.navigate(['./home']);
    }, 3000);
  }

}

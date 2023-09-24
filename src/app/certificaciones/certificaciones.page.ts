import { Component, OnInit,ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.page.html',
  styleUrls: ['./certificaciones.page.scss'],
})
export class CertificacionesPage implements OnInit {

  @ViewChild('datetime') datetime?: IonDatetime;
  @ViewChild('datetimev') datetimev?: IonDatetime;

  opcion: string = "certificaciones";
  fechaObtencion: any;
  fechaVencimiento: any;
  vencimiento: boolean = false;
  nombreCertificado: string ='';
  constructor(private router: Router,private navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.opcion="certificaciones";
  }

  segmentChange(even:any){
    if (this.opcion==="datos") {
      let json = localStorage.getItem('username');
      if (json) {
        let username = JSON.parse(json);
        this.navCtrl.navigateForward(`/main-page/${username}`);
      }
    }
    if (this.opcion==="explab"){
      this.router.navigate(['./exp-lab']);
    }
  }

  cleanInputs(){
    this.vencimiento=false;
    this.nombreCertificado='';
    let fechaActual = new Date();
    if (this.datetime) {
      this.datetime.value = fechaActual.toISOString();
    }
    if (this.datetimev) {
      this.datetimev.value = fechaActual.toISOString();
    }
  }
}

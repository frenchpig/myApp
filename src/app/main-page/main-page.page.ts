import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  name: string = '';
  lastname: string = '';
  public alertButtons = ['OK'];
  alertMessage: string = '';

  constructor(private modalController: ModalController,private router: Router) { }

  ngOnInit() {
  }

  changeAlertMessage(){
    this.alertMessage = "Su nombre es "+this.name+' '+this.lastname;
  }

  cleanInputs(){
    this.name = '';
    this.lastname = '';
  }

  volverAtras(){
    this.router.navigate(['./home']);
  }

}

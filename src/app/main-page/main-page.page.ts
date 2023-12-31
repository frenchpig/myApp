import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  name: string = '';
  lastname: string = '';
  username: string = '';
  public alertButtons = ['OK'];
  alertMessage: string = '';
  opcion: string = "datos";

  constructor(private route: ActivatedRoute,private router: Router,private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.route.params.subscribe(params => {
      this.username = params['username']
    });

  }

  changeAlertMessage(){
    this.alertMessage = "Su nombre es "+this.name+' '+this.lastname;
  }

  cleanInputs(){
    this.name = '';
    this.lastname = '';
    const nameInput = document.querySelector('#name');
    const lastnameInput = document.querySelector('#lastname');
    if (nameInput){
      const nameAnimation = this.animationCtrl
      .create()
      .addElement(nameInput)
      .duration(1000)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'translateX(0)', opacity: 1 },
        { offset: 0.5, transform: 'translateX(-5px)', opacity: 1 },
        { offset: 1, transform: 'translateX(5px)', opacity: 1 },
      ]);
      nameAnimation.play();
    }else{
      console.error('name Input not found!');
    }
    if(lastnameInput){
      const lastnameAnimation = this.animationCtrl
      .create()
      .addElement(lastnameInput)
      .duration(1000)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'translateX(0)', opacity: 1 },
        { offset: 0.5, transform: 'translateX(-5px)', opacity: 1 },
        { offset: 1, transform: 'translateX(5px)', opacity: 1 },
      ]);
      lastnameAnimation.play();
    }else{
      console.error('lastname Input not found!');
    }
  }

  volverAtras(){
    this.router.navigate(['./home']);
  }

  segmentChange(event: any){

    if (this.opcion==="explab") {
      this.router.navigate(['./exp-lab']);
      this.opcion="datos";
    }
    if (this.opcion==="certificaciones"){
      this.router.navigate(['./certificaciones']);
      this.opcion="datos";
    }
  }

}

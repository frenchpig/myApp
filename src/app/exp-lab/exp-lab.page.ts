import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-exp-lab',
  templateUrl: './exp-lab.page.html',
  styleUrls: ['./exp-lab.page.scss'],
})
export class ExpLabPage implements OnInit {
  opcion: string = "explab";
  afiliado: boolean = true;
  empresa:string = '';
  cargo: string = '';
  annioTermino: string = '';
  annioInicio: string = '';
  constructor(private router: Router,private navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.opcion="explab";
  }

  segmentChange(event: any){
    this.cleanInputs();
    if (this.opcion==="datos") {
      let json = localStorage.getItem('username');
      if (json) {
        let username = JSON.parse(json);
        this.navCtrl.navigateForward(`/main-page/${username}`);
      }
    }
    if (this.opcion==="certificaciones"){
      this.router.navigate(['./certificaciones']);
    }
  }

  cleanInputs(){
    this.afiliado=true;
    this.empresa='';
    this.cargo='';
    this.annioInicio='';
    this.annioTermino='';
  }

}

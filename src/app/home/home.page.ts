import { Component, ElementRef, ViewChildren, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard, IonTitle } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private animation?: Animation;

  constructor(private router: Router, private animationCtrl: AnimationController) {}


  ngOnInit(){
  }

  ngAfterViewInit() {
    const titleElement = document.querySelector('#title');
    if (titleElement) {
      this.animation = this.animationCtrl
        .create()
        .addElement(titleElement)
        .duration(1000)
        .iterations(Infinity)
        .keyframes([
          { offset: 0, transform: 'translateX(0)', opacity: 1 },
          { offset: 0.2, transform: 'translateX(50%)', opacity: 1 },
          { offset: 0.4, transform: 'translateX(100%)', opacity: 0.2 },
          { offset: 0.6, transform: 'translateX(-100%)', opacity: 0 },
          { offset: 1, transform: 'translateX(0)', opacity: 1 },
        ]);
        this.animation.play();
    } else {
      console.error('El elemento con el ID "title" no se encontró en el DOM.');
    }
  }

  irALogin(){
    this.router.navigate(['./login']);
  }

}

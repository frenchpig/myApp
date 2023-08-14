import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  valorRecibido?: boolean;
  resultadoLogin?: string;

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.valorRecibido = params.get('valor') === 'true';
    });
    if (this.valorRecibido==true){
      this.resultadoLogin='Login Exitoso!'
    }else{
      this.resultadoLogin='Credenciales Erronas TwT'
    }
  }

  volverAtras(){
    this.router.navigate(['./home']);
  }

}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main-page/:username',
    loadChildren: () => import('./main-page/main-page.module').then( m => m.MainPagePageModule)
  },
  {
    path: 'exp-lab',
    loadChildren: () => import('./exp-lab/exp-lab.module').then( m => m.ExpLabPageModule)
  },
  {
    path: 'certificaciones',
    loadChildren: () => import('./certificaciones/certificaciones.module').then( m => m.CertificacionesPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

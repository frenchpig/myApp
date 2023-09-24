import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpLabPage } from './exp-lab.page';

const routes: Routes = [
  {
    path: '',
    component: ExpLabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpLabPageRoutingModule {}

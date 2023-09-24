import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpLabPageRoutingModule } from './exp-lab-routing.module';

import { ExpLabPage } from './exp-lab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpLabPageRoutingModule
  ],
  declarations: [ExpLabPage]
})
export class ExpLabPageModule {}

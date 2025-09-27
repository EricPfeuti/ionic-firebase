import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarersPageRoutingModule } from './carers-routing.module';

import { CarersPage } from './carers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarersPageRoutingModule
  ],
  declarations: [CarersPage]
})
export class CarersPageModule {}

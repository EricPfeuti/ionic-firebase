import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarersDetailPageRoutingModule } from './carers-detail-routing.module';

import { CarersDetailPage } from './carers-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarersDetailPageRoutingModule
  ],
  declarations: [CarersDetailPage]
})
export class CarersDetailPageModule {}

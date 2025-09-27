import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarersDetailPage } from './carers-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CarersDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarersDetailPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarersPage } from './carers.page';

const routes: Routes = [
  {
    path: '',
    component: CarersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarersPageRoutingModule {}

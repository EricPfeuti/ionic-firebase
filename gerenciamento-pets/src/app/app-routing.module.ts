import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'pets',
    loadChildren: () => import('./pages/pets/pets.module').then( m => m.PetsPageModule)
  },
  {
    path: 'carers',
    loadChildren: () => import('./pages/carers/carers.module').then( m => m.CarersPageModule)
  },
  {
    path: 'carers-detail',
    loadChildren: () => import('./pages/carers-detail/carers-detail.module').then( m => m.CarersDetailPageModule)
  },
  {
    path: 'carers-detail/:id',
    loadChildren: () => import('./pages/carers-detail/carers-detail.module').then( m => m.CarersDetailPageModule)
  },
  {
    path: 'pets-detail',
    loadChildren: () => import('./pages/pets-detail/pets-detail.module').then( m => m.PetsDetailPageModule)
  },
  {
    path: 'pets-detail/:id',
    loadChildren: () => import('./pages/pets-detail/pets-detail.module').then( m => m.PetsDetailPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

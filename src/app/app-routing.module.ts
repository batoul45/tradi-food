import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopageComponent } from './pages/shopage/shopage.component';

const routes: Routes = [

  {

    path:'',
    redirectTo:'home',
    pathMatch:'full',
   },
   {
    path:'home',
    component:HomeComponent,
   },
   {
   path:'about',
   component:AboutComponent,
  },

  {
    path:'shop',
    component:ShopComponent,
   },
   {
    path:'shop/:id',
    component:ShopageComponent,
   },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


 
}

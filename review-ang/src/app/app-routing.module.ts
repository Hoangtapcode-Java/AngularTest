import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path: 'posts', component: ProductComponent}
];

@NgModule({
  imports: [],
  exports: []
})
export class AppRoutingModule { }

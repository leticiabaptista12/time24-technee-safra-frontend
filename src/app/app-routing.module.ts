import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceptComponent } from './pages/accept/accept.component';
import { OptionsComponent } from './pages/options/options.component';
import { ProductComponent } from './pages/product/product.component';
import { SuccessComponent } from './pages/success/success.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'options',
    component: OptionsComponent
  },
  {
    path: 'accept',
    component: AcceptComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

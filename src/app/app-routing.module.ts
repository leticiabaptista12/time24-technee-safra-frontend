import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AcceptComponent } from './pages/accept/accept.component';
import { GroupComponent } from './pages/group/group.component';
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
  },
  {
    path: 'group',
    component: GroupComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

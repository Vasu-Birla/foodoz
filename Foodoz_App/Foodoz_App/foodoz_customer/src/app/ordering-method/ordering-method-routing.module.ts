import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderingMethodPage } from './ordering-method.page';

const routes: Routes = [
  {
    path: '',
    component: OrderingMethodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderingMethodPageRoutingModule {}

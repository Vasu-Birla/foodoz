import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessPaymentPage } from './process-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ProcessPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessPaymentPageRoutingModule {}

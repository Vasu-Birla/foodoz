import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VariationSelectionAlertPage } from './variation-selection-alert.page';

const routes: Routes = [
  {
    path: '',
    component: VariationSelectionAlertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VariationSelectionAlertPageRoutingModule { }

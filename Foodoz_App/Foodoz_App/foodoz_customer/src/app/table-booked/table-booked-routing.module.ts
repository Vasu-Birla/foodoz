import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableBookedPage } from './table-booked.page';

const routes: Routes = [
  {
    path: '',
    component: TableBookedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableBookedPageRoutingModule {}

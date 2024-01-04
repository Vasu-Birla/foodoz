import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchNewPage } from './search-new.page';

const routes: Routes = [
  {
    path: '',
    component: SearchNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchNewPageRoutingModule {}

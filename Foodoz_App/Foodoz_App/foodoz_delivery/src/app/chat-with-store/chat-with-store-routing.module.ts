import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatWithStorePage } from './chat-with-store.page';

const routes: Routes = [
  {
    path: '',
    component: ChatWithStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatWithStorePageRoutingModule {}

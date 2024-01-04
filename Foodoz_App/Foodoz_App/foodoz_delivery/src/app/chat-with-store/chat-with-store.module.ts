import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { ChatWithStorePageRoutingModule } from './chat-with-store-routing.module';

import { ChatWithStorePage } from './chat-with-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    ChatWithStorePageRoutingModule
  ],
  declarations: [ChatWithStorePage]
})
export class ChatWithStorePageModule {}

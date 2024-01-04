import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { ChatCustomerPageRoutingModule } from './chat-customer-routing.module';

import { ChatCustomerPage } from './chat-customer.page';
import { CallNumber } from '@ionic-native/call-number/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ChatCustomerPageRoutingModule
  ],
  providers: [CallNumber],
  declarations: [ChatCustomerPage]
})
export class ChatCustomerPageModule { }

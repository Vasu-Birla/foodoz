import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { ProcessPaymentPageRoutingModule } from './process-payment-routing.module';

import { ProcessPaymentPage } from './process-payment.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcessPaymentPageRoutingModule,
    TranslateModule,
  ], providers: [InAppBrowser],
  declarations: [ProcessPaymentPage]
})
export class ProcessPaymentPageModule { }

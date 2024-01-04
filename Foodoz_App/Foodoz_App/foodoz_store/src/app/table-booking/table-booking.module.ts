import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
    
import { IonicModule } from '@ionic/angular';

import { TableBookingPageRoutingModule } from './table-booking-routing.module';

import { TableBookingPage } from './table-booking.page';
import { CallNumber } from '@ionic-native/call-number/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,        
    TableBookingPageRoutingModule
  ],
  providers: [CallNumber],
  declarations: [TableBookingPage]
})
export class TableBookingPageModule {}

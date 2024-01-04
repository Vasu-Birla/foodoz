import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
  
import { IonicModule } from '@ionic/angular';

import { OrderDetailPageRoutingModule } from './order-detail-routing.module';

import { OrderDetailPage } from './order-detail.page';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { GoogleMapsService } from '../services/network/google-maps.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    OrderDetailPageRoutingModule
  ],
  providers: [CallNumber, GoogleMapsService],
  declarations: [OrderDetailPage]
})
export class OrderDetailPageModule {}

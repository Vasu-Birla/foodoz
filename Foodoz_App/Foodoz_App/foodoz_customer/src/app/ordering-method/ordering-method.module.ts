import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
  
import { IonicModule } from '@ionic/angular';

import { OrderingMethodPageRoutingModule } from './ordering-method-routing.module';

import { OrderingMethodPage } from './ordering-method.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    OrderingMethodPageRoutingModule
  ],
  declarations: [OrderingMethodPage]
})
export class OrderingMethodPageModule {}

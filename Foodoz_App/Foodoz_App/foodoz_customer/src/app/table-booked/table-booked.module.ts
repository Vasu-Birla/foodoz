import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
    
import { IonicModule } from '@ionic/angular';

import { TableBookedPageRoutingModule } from './table-booked-routing.module';

import { TableBookedPage } from './table-booked.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    TableBookedPageRoutingModule
  ],
  declarations: [TableBookedPage]
})
export class TableBookedPageModule {}

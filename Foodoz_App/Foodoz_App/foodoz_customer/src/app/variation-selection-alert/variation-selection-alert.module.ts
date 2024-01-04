import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VariationSelectionAlertPageRoutingModule } from './variation-selection-alert-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { VariationSelectionAlertPage } from './variation-selection-alert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    VariationSelectionAlertPageRoutingModule
  ],
  declarations: [VariationSelectionAlertPage]
})
export class VariationSelectionAlertPageModule { }

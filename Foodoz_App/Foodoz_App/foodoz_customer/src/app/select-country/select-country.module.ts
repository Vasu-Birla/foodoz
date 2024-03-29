import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { SelectCountryPageRoutingModule } from './select-country-routing.module';

import { SelectCountryPage } from './select-country.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    SelectCountryPageRoutingModule
  ],
  declarations: [SelectCountryPage]
})
export class SelectCountryPageModule {}

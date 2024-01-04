import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SearchNewPageRoutingModule } from './search-new-routing.module';

import { SearchNewPage } from './search-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SearchNewPageRoutingModule
  ],
  declarations: [SearchNewPage]
})
export class SearchNewPageModule {}

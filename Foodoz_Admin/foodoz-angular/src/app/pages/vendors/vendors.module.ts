import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { routedComponents, VendorsRoutingModule } from './vendors-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    VendorsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class VendorsModule { }

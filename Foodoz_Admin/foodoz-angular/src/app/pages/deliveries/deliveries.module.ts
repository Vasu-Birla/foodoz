import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DeliveriesRoutingModule, routedComponents } from './deliveries-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    DeliveriesRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class DeliveriesModule { }

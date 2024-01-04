import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { routedComponents, OrdersRoutingModule } from './orders-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    ThemeModule,
    OrdersRoutingModule,
    GoogleMapsModule
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class OrdersModule { }

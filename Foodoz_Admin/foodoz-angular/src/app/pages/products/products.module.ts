import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { routedComponents, ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    ProductsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ProductsModule { }

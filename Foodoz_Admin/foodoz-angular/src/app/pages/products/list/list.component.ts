import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BaseListComponent } from '../../../@core/components/base-list.component';
import { TranslationService } from '../../../@core/service/translation.service';
import { CoreService } from '../../../@core/service/core.service';
import { ListDataSource } from '../../../@core/network/list-data-source';
import { ProductClient } from '../../../@core/network/product-client.service';
import { ToastStatus } from '../../../@core/service/toast.service';
import { ActivatedRoute } from '@angular/router';
import { Constants } from '../../../@core/models/constants.model';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent extends BaseListComponent implements OnInit {
  columns = [
    {
      key: 'title',
      translation_key: 'PRODUCT.FIELDS.TITLE.LABEL',
      column: {
        title: "",
        type: "string"
      }
    },
    {
      key: 'vendor_products',
      translation_key: 'VENDOR.FIELDS.NAME.LABEL',
      column: {
        title: "",
        type: "string",
        valuePrepareFunction: (vendor_products) => {
          return vendor_products.length > 0 && vendor_products[0].vendor.name ? vendor_products[0].vendor.name : this.coreService.translateService.instant('COMMON.NOT_AVAILABLE');
        },
      }
    },
  ];
  editPageUrl = 'pages/products/edit';

  constructor(public client: ProductClient, public coreService: CoreService, public route: ActivatedRoute) {
    super(coreService);
  }

  ngOnInit(): void {
    let vendor = this.route.snapshot.queryParamMap.get('vendor');
    let url = vendor ? this.client.getBaseEndpoint() + '?vendor=' + vendor : this.client.getBaseEndpoint();
    super.ngOnInit(url);
  }
}

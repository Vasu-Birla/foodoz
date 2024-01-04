import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BaseListComponent } from '../../../@core/components/base-list.component';
import { TranslationService } from '../../../@core/service/translation.service';
import { CoreService } from '../../../@core/service/core.service';
import { ListDataSource } from '../../../@core/network/list-data-source';
import { OrderClient } from '../../../@core/network/order-client.service';
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
      key: 'id',
      translation_key: 'ORDER.FIELDS.ID.LABEL',
      column: {
        title: "",
        type: "string"
      }
    },
    {
      key: 'user',
      translation_key: 'ORDER.FIELDS.USER.LABEL',
      column: {
        title: "",
        type: "string",
        valuePrepareFunction: (user) => {
          return user.mobile_number;
        },
      }
    },
    {
      key: 'vendor',
      translation_key: 'ORDER.FIELDS.VENDOR.LABEL',
      column: {
        title: "",
        type: "string",
        valuePrepareFunction: (vendor) => {
          return vendor.name;
        },
      }
    },
    {
      key: 'status',
      translation_key: 'ORDER.FIELDS.STATUS.LABEL',
      column: {
        title: "",
        type: "string"
      }
    },
    {
      key: 'total',
      translation_key: 'ORDER.FIELDS.TOTAL.LABEL',
      column: {
        title: "",
        type: "string",
        filter: false
      }
    }
  ];
  editPageUrl = 'pages/orders/edit';

  constructor(public client: OrderClient, public coreService: CoreService, public route: ActivatedRoute) {
    super(coreService);
  }

  ngOnInit(): void {
    super.ngOnInit(this.client.getBaseEndpoint());
  }
}

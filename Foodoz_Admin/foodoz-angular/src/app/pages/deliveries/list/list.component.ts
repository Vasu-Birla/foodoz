import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BaseListComponent } from '../../../@core/components/base-list.component';
import { TranslationService } from '../../../@core/service/translation.service';
import { CoreService } from '../../../@core/service/core.service';
import { ListDataSource } from '../../../@core/network/list-data-source';
import { DeliveryClient } from '../../../@core/network/delivery-client.service';
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
      key: 'user',
      translation_key: 'DELIVERY.FIELDS.USER.LABEL',
      column: {
        title: "",
        type: "string",
        valuePrepareFunction: (user) => {
          return user?.mobile_number;
        },
      }
    },
    {
      key: 'is_online',
      translation_key: 'DELIVERY.FIELDS.IS_ONLINE.LABEL',
      column: {
        title: "",
        type: "string",
        filter: false
      }
    },
    {
      key: 'assigned',
      translation_key: 'DELIVERY.FIELDS.ASSIGNED.LABEL',
      column: {
        title: "",
        type: "string",
        filter: false
      }
    }
  ];
  editPageUrl = 'pages/deliveries/edit';

  constructor(public client: DeliveryClient, public coreService: CoreService, public route: ActivatedRoute) {
    super(coreService);
  }

  ngOnInit(): void {
    super.ngOnInit(this.client.getBaseEndpoint());
  }
}

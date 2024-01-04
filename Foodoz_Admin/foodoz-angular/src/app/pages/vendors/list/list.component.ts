import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BaseListComponent } from '../../../@core/components/base-list.component';
import { TranslationService } from '../../../@core/service/translation.service';
import { CoreService } from '../../../@core/service/core.service';
import { ListDataSource } from '../../../@core/network/list-data-source';
import { VendorClient } from '../../../@core/network/vendor-client.service';
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
      key: 'name',
      translation_key: 'VENDOR.FIELDS.NAME.LABEL',
      column: {
        title: "",
        type: "string",
        valuePrepareFunction: (name) => {
          return name ? name : this.coreService.translateService.instant('COMMON.NOT_AVAILABLE');
        },
      }
    },
    {
      key: 'user',
      translation_key: 'VENDOR.FIELDS.USER.LABEL',
      column: {
        title: "",
        type: "string",
        valuePrepareFunction: (user) => {
          return user.mobile_number;
        },
      }
    }
  ];
  editPageUrl = 'pages/vendors/edit';

  constructor(public client: VendorClient, public coreService: CoreService, public route: ActivatedRoute) {
    super(coreService);
  }

  ngOnInit(): void {
    super.ngOnInit(this.client.getBaseEndpoint());
  }
}

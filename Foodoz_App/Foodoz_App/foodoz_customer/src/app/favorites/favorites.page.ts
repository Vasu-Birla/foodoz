import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { ECommerceService } from '../services/common/ecommerce.service';
import { Vendor } from 'src/models/vendor.models';
import { Helper } from 'src/models/helper.models';
import { ItemsPage } from '../items/items.page';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss']
})
export class FavoritesPage implements OnInit {
  private subscriptions = new Array<Subscription>();
  isLoading = true;
  vendors = new Array<Vendor>();

  constructor(private router: Router, private navCtrl: NavController, private translate: TranslateService,public eComService: ECommerceService,
    private uiElementService: UiElementsService, private apiService: ApiService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  ionViewWillEnter() {
    if (this.vendors && this.vendors.length) {
      this.isLoading = true;
      this.loadProducts();
    } else {
      this.translate.get("loading").subscribe(value => {
        // this.uiElementService.presentLoading(value);
        this.loadProducts();
      });
    }
  }

  loadProducts() {
    this.subscriptions.push(this.apiService.getVendorsFavorite().subscribe(res => {
      this.vendors = res;
      this.isLoading = false;
      this.uiElementService.dismissLoading();
    }, err => {
      console.log("getProductsFavorite", err);
      this.uiElementService.dismissLoading();
      this.isLoading = false;
    }));
  }

  navVenDetail(vend) {
    this.navCtrl.navigateForward(['./items'], ItemsPage.getStateExtras(vend));
  }


}


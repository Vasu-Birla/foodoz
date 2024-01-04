import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Coupon } from 'src/models/coupon.models';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss']
})
export class OffersPage implements OnInit, OnDestroy {
  private subscriptions = new Array<Subscription>();
  offers = new Array<Coupon>();
  isLoading = true;

  constructor(private navCtrl: NavController, private translate: TranslateService,
    private uiElementService: UiElementsService, private apiService: ApiService, private clipboard: Clipboard) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.translate.get("loading").subscribe(value => {
      // this.uiElementService.presentLoading(value);
      this.isLoading = true;
      this.getOffers();
    });
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  getOffers() {
    this.apiService.getCoupons().subscribe(res => {
      this.isLoading = false;
      this.offers = this.offers.concat(res);
      this.uiElementService.dismissLoading();
    }, err => {
      console.log("getCoupons", err);
      this.isLoading = false;
      this.uiElementService.dismissLoading();
    });
  }

  copyOffer(offer: Coupon) {
    this.clipboard.copy(offer.code).then(res => {
      this.translate.get("code_copied").subscribe(value => this.uiElementService.presentToast(value));
    }).catch(err => console.log("clipboard", err));
  }

}

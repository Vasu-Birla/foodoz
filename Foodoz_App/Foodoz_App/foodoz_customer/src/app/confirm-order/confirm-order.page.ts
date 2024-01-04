import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ECommerceService } from '../services/common/ecommerce.service';
import { UiElementsService } from '../services/common/ui-elements.service';
import { Helper } from 'src/models/helper.models';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/network/api.service';
import { Coupon } from 'src/models/coupon.models';
import { MyAddress } from 'src/models/address.models';
import { Constants } from 'src/models/constants.models';
import { OrderingMethodPage } from '../ordering-method/ordering-method.page';
import * as moment from 'moment';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.page.html',
  styleUrls: ['./confirm-order.page.scss']
})
export class ConfirmOrderPage implements OnInit {
  private subscriptions = new Array<Subscription>();
  fabAction = false;
  couponCode: string;
  currency_icon: string;
  couponRes: Coupon;
  selectedLocation: MyAddress;
  notes: string;

  constructor(private navCtrl: NavController, private modalController: ModalController, private translate: TranslateService,
    public eComService: ECommerceService, private uiElementService: UiElementsService, private apiService: ApiService) { }

  ngOnInit() {
    this.currency_icon = Helper.getSetting("currency_icon");
    this.eComService.removeCoupon();
    this.selectedLocation = Helper.getAddressSelected();

    this.subscriptions.push(this.apiService.calculateDeliveryFee(this.eComService.getCartItems()[0].meta.vendor_id, this.eComService.getCartItems()[0].meta.vendor_lat, this.eComService.getCartItems()[0].meta.vendor_lng, this.selectedLocation.latitude, this.selectedLocation.longitude).subscribe(res => {
      let deliveryFee: number;
      try {
        deliveryFee = Number(res.delivery_fee);
      } catch (e) {
        console.log("invalid number: ", res);
      } finally {
        console.log("deliveryFee: ", deliveryFee);
        if (deliveryFee) {
          this.eComService.setDeliveryFee(deliveryFee);
        }
      }
    }));
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  getAddOnPrice(addOnPrice, quantity) {
    return Helper.toFixedNumber(Number(addOnPrice * quantity));
  }

  verifyCoupon() {
    if (Helper.getLoggedInUser() != null) {
      if (this.couponCode && this.couponCode.length) {
        this.translate.get(["verifying", "invalid_coupon"]).subscribe(values => {
          this.uiElementService.presentLoading(values["verifying"]);
          this.subscriptions.push(this.apiService.checkCoupon(this.couponCode).subscribe(res => {
            this.uiElementService.dismissLoading();
            if (moment(res.expires_at).diff(moment()) > 0) {
              this.couponRes = res;
              this.applyCoupon();
            } else {
              this.couponRes = null;
              this.uiElementService.presentToast(values["invalid_coupon"]);
            }
          }, err => {
            this.couponCode = "";
            this.couponRes = null;
            this.uiElementService.presentToast(values["invalid_coupon"]);
            console.log("checkCoupon", err);
            this.uiElementService.dismissLoading();
          }));
        });
      } else {
        this.translate.get("err_field_coupon").subscribe(value => this.uiElementService.presentToast(value));
      }
    } else {
      this.alertLogin();
    }
  }

  removeCoupon() {
    this.couponCode = null;
    this.couponRes = null;
    this.applyCoupon();
  }

  applyCoupon() {
    this.eComService.applyCoupon(this.couponRes);
  }

  viewCoupon(){
    this.navCtrl.navigateForward(['./offers']);
  }

  toggleFab() {
    this.fabAction = !this.fabAction;
  }

  decrementCartItem(ci) {
    window.localStorage.setItem(Constants.KEY_CART_CHANGED, "changed");
    this.eComService.removeOrDecrementCartItem(ci);
    if (this.eComService.getCartItems().length == 0) this.navCtrl.pop();
  }

  addOrIncrementCartItem(ci) {
    window.localStorage.setItem(Constants.KEY_CART_CHANGED, "changed");
    this.eComService.addOrIncrementCartItem(ci);
  }

  // navAddressSelection() {
  //   if (Helper.getLoggedInUser() != null) {
  //     this.navCtrl.navigateForward(['./select-address']);
  //   } else {
  //     this.alertLogin();
  //   }
  // }

  // navToSelectAddressTime() {
  //   if (Helper.getLoggedInUser() != null) {
  //    if(this.notes && this.notes.length) this.eComService.setupOrderRequestNotes(this.notes)
  //     this.navCtrl.navigateForward(['./time-location']);
  //   } else {
  //     this.alertLogin();
  //   }
  // }

  payment() {
    if (Helper.getLoggedInUser() != null) {
      // this.modalController.create({ component: OrderingMethodPage }).then((modalElement) => {
      //   modalElement.onDidDismiss().then(data => {
      //     console.log(data);
      //     if (data && data.data && data.data.order_type && data.data.reach_time) {
      //       this.eComService.setupOrderRequestOrder_type(data.data.order_type.toLocaleUpperCase());
      //       if (data.data.order_type.toLocaleLowerCase() == 'takeaway') this.eComService.setupOrderRequestMeta("reach_time", data.data.reach_time.toString());
      //       this.eComService.setupOrderRequestAddress(this.selectedLocation);
      //       this.navCtrl.navigateForward(['./payment']);
      //     }
      //   });
      //   modalElement.present();
      // });
      this.eComService.setupOrderRequestOrder_type("NORMAL");
      this.eComService.setupOrderRequestAddress(this.selectedLocation);
      this.navCtrl.navigateForward(['./payment']);
    } else {
      this.alertLogin();
    }
  }

  alertLogin() {
    this.translate.get("alert_login_short").subscribe(value => this.uiElementService.presentToast(value));
    this.navCtrl.navigateForward(['./phone-number']);
  }
}

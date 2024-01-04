import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { ECommerceService } from '../services/common/ecommerce.service';
import { Subscription } from 'rxjs';
import { PaymentMethod } from 'src/models/payment-method.models';
import { Helper } from 'src/models/helper.models';
import { NavigationExtras } from '@angular/router';
import { CardInfoPage } from '../card-info/card-info.page';
import { Stripe, StripeCardTokenParams } from '@ionic-native/stripe/ngx';
import { CardInfo } from 'src/models/card-info.models';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss']
})
export class PaymentPage implements OnInit, OnDestroy {
  private subscriptions = new Array<Subscription>();
  private stripeCardTokenId: string;
  paymentMethods = new Array<PaymentMethod>();
  paymentMethoIdSelected = -1;
  fabAction = false;
  currency_icon: string;
  isLoading: boolean = true;

  constructor(private navCtrl: NavController, private translate: TranslateService, private modalController: ModalController,
    private uiElementService: UiElementsService, private apiService: ApiService, public eComService: ECommerceService, private stripe: Stripe) {
    this.currency_icon = Helper.getSetting("currency_icon");
    this.translate.get("loading").subscribe(value => {
      // this.uiElementService.presentLoading(value);
      this.subscriptions.push(this.apiService.getPaymentMethods().subscribe(res => {
        this.paymentMethods = this.spliceFor(res, []);
        this.uiElementService.dismissLoading();
        this.isLoading = false;
      }, err => {
        console.log("getPaymentMethods", err);
        this.uiElementService.dismissLoading();
        this.isLoading = false;
      }));
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  onPaymentMethodSelected(event) {
    if (event.detail && event.detail.value) {
      this.paymentMethoIdSelected = event.detail.value;
    }
  }

  confirmOrder() {
    let selectedPaymentMethod = this.getSelectedPaymentMethod();
    if (selectedPaymentMethod != null) {
      this.eComService.setupOrderRequestPaymentMethod(selectedPaymentMethod);
      if (selectedPaymentMethod.slug == "cod") {
        this.proceedPlaceOrder();
      } else if (selectedPaymentMethod.slug == "wallet") {
        this.translate.get(["just_moment", "insufficient_wallet"]).subscribe(values => {
          this.uiElementService.presentLoading(values["just_moment"]);
          this.subscriptions.push(this.apiService.getBalance().subscribe(res => {
            this.uiElementService.dismissLoading();
            if (res.balance >= this.eComService.getCartTotal(true)) {
              this.eComService.setupOrderRequestPaymentMethod(selectedPaymentMethod);
              this.proceedPlaceOrder();
            } else {
              this.uiElementService.presentToast(values["insufficient_wallet"]);
            }
          }, err => {
            console.log("getBalance", err);
            this.uiElementService.dismissLoading();
            this.uiElementService.presentToast(values["insufficient_wallet"]);
          }));
        });
      } else if (selectedPaymentMethod.slug == "payu") {
        let keysMeta;
        try { keysMeta = JSON.parse(selectedPaymentMethod.meta); } catch (e) { console.log(e); }
        if (keysMeta && keysMeta.public_key && keysMeta.private_key) {
          this.proceedPlaceOrder();
        } else {
          this.translate.get("payment_setup_fail").subscribe(value => this.uiElementService.presentToast(value));
        }
      } else if (selectedPaymentMethod.slug == "paystack") {
        this.proceedPlaceOrder();
      } else if (selectedPaymentMethod.slug == "stripe") {
        let keysMeta;
        try { keysMeta = JSON.parse(selectedPaymentMethod.meta); } catch (e) { console.log(e); }
        if (keysMeta && keysMeta.public_key) {
          if (this.stripeCardTokenId) {
            this.proceedPlaceOrder();
          } else {
            this.modalController.create({ component: CardInfoPage }).then((modalElement) => {
              modalElement.onDidDismiss().then(data => {
                console.log(data);
                if (data && data.data) {
                  this.generateStripeCardIdToken(data.data, keysMeta.public_key);
                } else {
                  this.translate.get("card_info_err").subscribe(value => this.uiElementService.presentToast(value));
                }
              });
              modalElement.present();
            });
          }
        } else {
          this.translate.get("payment_setup_fail").subscribe(value => this.uiElementService.presentToast(value));
        }
      } else {
        this.translate.get("payment_setup_fail").subscribe(value => this.uiElementService.presentToast(value));
      }
    } else {
      this.translate.get("select_payment_method").subscribe(value => this.uiElementService.presentToast(value));
    }
  }

  private generateStripeCardIdToken(cardInfo: CardInfo, stripeKey: string) {
    this.translate.get(["verifying_card", "invalid_card"]).subscribe(values => {
      this.uiElementService.presentLoading(values["just_moment"]);
      this.stripe.setPublishableKey(stripeKey);
      this.stripe.createCardToken(cardInfo as StripeCardTokenParams).then(token => {
        this.uiElementService.dismissLoading();
        this.stripeCardTokenId = token.id;
        this.confirmOrder();
      }).catch(error => {
        this.uiElementService.dismissLoading();
        this.uiElementService.presentToast(values["invalid_card"]);
        console.error(error);
      });
    });
  }

  proceedPlaceOrder() {
    let orderRequest = this.eComService.getOrderRequest();
    this.translate.get(["order_placing", "order_placed", "order_place_err"]).subscribe(values => {
      this.uiElementService.presentLoading(values["order_placing"]);
      this.apiService.createOrder(orderRequest).subscribe(res => {
        this.uiElementService.dismissLoading();
        let navigationExtras: NavigationExtras = { state: { order: res.order, payment: res.payment, stripeTokenId: this.stripeCardTokenId } };
        this.navCtrl.navigateRoot(['./order-placed'], navigationExtras);
      }, err => {
        console.log("createOrder", err);
        this.uiElementService.dismissLoading();
        this.uiElementService.presentToast(values["order_place_err"]);
      });
    });
  }

  getSelectedPaymentMethod(): PaymentMethod {
    let toReturn = null;
    for (let pm of this.paymentMethods) if (this.paymentMethoIdSelected == pm.id) { toReturn = pm; break; }
    return toReturn;
  }

  toggleFab() {
    this.fabAction = !this.fabAction;
  }

  pay() {
    this.navCtrl.navigateRoot(['./order-placed']);
  }

  private spliceFor(pgs: Array<PaymentMethod>, removeFor: Array<string>): Array<PaymentMethod> {
    let indexToRemove = -1;
    for (let i = 0; i < pgs.length; i++) {
      if (removeFor.includes(pgs[i].slug) || pgs[i].enabled != 1) {
        indexToRemove = i;
        break;
      }
    }
    if (indexToRemove != -1) {
      pgs.splice(indexToRemove, 1);
      return this.spliceFor(pgs, removeFor);
    } else {
      return pgs;
    }
  }
}
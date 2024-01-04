import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { OrderPayment } from 'src/models/order-payment.models';
import { APP_CONFIG, AppConfig } from '../app.config';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { sha512 } from 'js-sha512';

@Component({
  selector: 'app-process-payment',
  templateUrl: './process-payment.page.html',
  styleUrls: ['./process-payment.page.scss']
})
export class ProcessPaymentPage implements OnInit {
  private once = false;
  private subscriptions = new Array<Subscription>();
  private payment: OrderPayment;
  private payuMeta: {
    name: string;
    mobile: string;
    email: string;
    bookingId: string;
    productinfo: string;
  };
  private payumoneyFailAlerted = false;
  private stripeTokenId: string;
  processing = true;
  paymentDone = false;

  constructor(@Inject(APP_CONFIG) private config: AppConfig, private router: Router, private uiElementService: UiElementsService, private apiService: ApiService,
    private navCtrl: NavController, private inAppBrowser: InAppBrowser, private translate: TranslateService) { }

  ngOnInit() {
    this.once = false;
    if (this.router.getCurrentNavigation().extras.state) {
      this.payment = this.router.getCurrentNavigation().extras.state.payment;
      this.payuMeta = this.router.getCurrentNavigation().extras.state.payuMeta;
      this.stripeTokenId = this.router.getCurrentNavigation().extras.state.stripeTokenId;
    }
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  ionViewDidEnter() {
    if (!this.once) {
      this.once = true;
      this.initProcessPayment();
    }
  }

  private initProcessPayment() {
    window.localStorage.setItem("listen_process_payment", "true");
    window.localStorage.removeItem("result_process_payment");

    if (this.payment.payment_method.slug == "wallet") {
      this.initWalletPay();
    } else if (this.payment.payment_method.slug == "payu") {
      let keysMeta;
      try { keysMeta = JSON.parse(this.payment.payment_method.meta); } catch (e) { console.log(e); }
      if (keysMeta && keysMeta.public_key && keysMeta.private_key) {
        this.initPayUMoney(keysMeta.public_key, keysMeta.private_key);
      } else {
        this.translate.get("payment_setup_fail").subscribe(value => this.uiElementService.presentToast(value));
        this.markPaymentFail();
      }
    } else if (this.payment.payment_method.slug == "paystack") {
      this.initPaystack();
    } else if (this.payment.payment_method.slug == "stripe") {
      this.initStripe();
    }
  }

  private initWalletPay() {
    this.translate.get(["just_moment", "something_wrong"]).subscribe(values => {
      //this.uiElementService.presentLoading(values["just_moment"]);
      this.subscriptions.push(this.apiService.walletPayout(this.payment.id).subscribe(res => {
        //this.uiElementService.dismissLoading();
        if (res.success) {
          this.markPaymentSuccess();
        } else {
          this.uiElementService.presentToast(res.message);
          this.markPaymentFail();
        }
      }, err => {
        console.log("walletPayout", err);
        //this.uiElementService.dismissLoading();
        this.uiElementService.presentToast(values["something_wrong"]);

        this.markPaymentFail();
      }));
    });
  }

  private initStripe() {
    this.translate.get(["just_moment", "something_wrong"]).subscribe(values => {
      //this.uiElementService.presentLoading(values["just_moment"]);
      this.subscriptions.push(this.apiService.stripePayment(this.payment.id, this.stripeTokenId).subscribe(res => {
        //this.uiElementService.dismissLoading();
        if (res.success) {
          this.markPaymentSuccess();
        } else {
          this.uiElementService.presentToast(res.message);
          this.markPaymentFail();
        }
      }, err => {
        console.log("walletPayout", err);
        //this.uiElementService.dismissLoading();
        this.uiElementService.presentToast(values["something_wrong"]);

        this.markPaymentFail();
      }));
    });
  }

  private initPaystack() {
    let options: InAppBrowserOptions = {
      location: 'yes',
      clearcache: 'yes',
      zoom: 'yes',
      toolbar: 'no',
      closebuttoncaption: 'back'
    };
    try {
      const browser: any = this.inAppBrowser.create((this.config.apiBase + "api/payment/paystack/" + this.payment.id), '_blank', options);
      browser.on('loadstop').subscribe(event => {
        console.log("url", event.url);
        console.log("loadstop", event);
        if (String(event.url).indexOf("result=success") != -1) {
          this.paymentDone = true;
          this.translate.get('payment_success').subscribe(text => this.uiElementService.presentToast(text, "bottom", 3000));
          browser.close();
          this.markPaymentSuccess();
        }
        if (String(event.url).indexOf("result=error") != -1) {
          this.translate.get('something_wrong').subscribe(text => this.uiElementService.presentToast(text));
          browser.close();
        }
      });

      browser.on('exit').subscribe(event => {
        if (!this.paymentDone) {
          this.markPaystackFail();
          if (!this.payumoneyFailAlerted) {
            this.translate.get('payment_fail').subscribe(text => this.uiElementService.presentToast(text, "bottom", 2000));
          }
        }
      });
      browser.on('loaderror').subscribe(event => {
        this.markPaystackFail();
        this.translate.get('payment_fail').subscribe(text => this.uiElementService.presentToast(text, "bottom", 2000));
      });
    } catch (e) {
      this.markPaystackFail();
    }
  }

  private initPayUMoney(key: string, salt: string) {
    let name = this.payuMeta.name;
    let mobile = this.payuMeta.mobile;
    let email = this.payuMeta.email;
    let bookingId = this.payuMeta.bookingId;
    let productinfo = this.payuMeta.productinfo;
    let amt = this.payment.amount;
    let checksum = key + "|" + bookingId + "|" + amt + "|" + productinfo + "|" + name + "|" + email + '|||||||||||' + salt;
    let encrypttext = sha512(checksum);
    let furl = this.config.apiBase + "api/payment/payu/" + this.payment.id + "?result=failed";
    let surl = this.config.apiBase + "api/payment/payu/" + this.payment.id + "?result=success";

    let url = this.config.apiBase + "assets/vendor/payment/payumoney/payuBiz.html?amt=" + amt + "&name=" + name + "&mobileNo=" + mobile + "&email=" + email + "&bookingId=" + bookingId + "&productinfo=" + productinfo + "&hash=" + encrypttext + "&salt=" + salt + "&key=" + key + "&furl=" + furl + "&surl=" + surl;

    console.log("payuurl", url);
    let options: InAppBrowserOptions = {
      location: 'yes',
      clearcache: 'yes',
      zoom: 'yes',
      toolbar: 'no',
      hideurlbar: 'yes',
      closebuttoncaption: 'back'
    };
    try {
      const browser: any = this.inAppBrowser.create(url, '_blank', options);
      browser.on('loadstop').subscribe(event => {
        console.log("loadstop", String(event.url));
        if (event.url == surl) {
          this.paymentDone = true;
          this.translate.get('payment_success').subscribe(text => this.uiElementService.presentToast(text, "bottom", 3000));
          browser.close();
          this.markPaymentSuccess();
        }
        if (event.url == furl) {
          this.translate.get('payment_fail').subscribe(text => this.uiElementService.presentToast(text, "bottom", 2000));
          browser.close();
        }
      });
      browser.on('exit').subscribe(event => {
        if (!this.paymentDone) {
          this.markPayuFail();
          if (!this.payumoneyFailAlerted) {
            this.translate.get('payment_fail').subscribe(text => this.uiElementService.presentToast(text, "bottom", 2000));
          }
        }
      });
      browser.on('loaderror').subscribe(event => {
        this.markPayuFail();
        this.translate.get('payment_fail').subscribe(text => this.uiElementService.presentToast(text, "bottom", 2000));
      });
    } catch (e) {
      this.markPayuFail();
    }
  }

  private markPayuFail() {
    this.apiService.postURL(this.config.apiBase + "api/payment/payu/" + this.payment.id + "?result=failed").subscribe(res => {
      console.log(res);
      this.markPaymentFail();
    }, err => {
      console.log(err);
      this.markPaymentFail();
    });
  }

  private markPaystackFail() {
    this.apiService.getURL(this.config.apiBase + "api/payment/paystack/callback/" + this.payment.id + "?result=error").subscribe(res => {
      console.log(res);
      this.markPaymentFail();
    }, err => {
      console.log(err);
      this.markPaymentFail();
    });
  }

  private markPaymentFail() {
    this.processing = false;
    this.paymentDone = false;
    window.localStorage.setItem("result_process_payment", "false");
    this.navCtrl.pop();
  }

  private markPaymentSuccess() {
    this.processing = false;
    this.paymentDone = true;
    window.localStorage.setItem("result_process_payment", "true");
    this.navCtrl.pop();
  }

}

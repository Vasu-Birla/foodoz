import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ECommerceService } from '../services/common/ecommerce.service';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.page.html',
  styleUrls: ['./order-placed.page.scss']
})
export class OrderPlacedPage implements OnInit {
  processing: boolean = false;
  paymentDone: boolean = false;

  constructor(private router: Router, private navCtrl: NavController, private eComService: ECommerceService) { }

  ngOnInit() {
    if (this.router.getCurrentNavigation().extras.state) {
      let order = this.router.getCurrentNavigation().extras.state.order;
      let orderPayment = this.router.getCurrentNavigation().extras.state.payment;
      let stripeTokenId = this.router.getCurrentNavigation().extras.state.stripeTokenId;
      let authorizeNetCard = this.router.getCurrentNavigation().extras.state.authorizeNetCard;
      if (!orderPayment) orderPayment = order.payment;
      this.paymentDone = orderPayment.payment_method.slug == "cod";
      this.processing = orderPayment.payment_method.slug != "cod";
      if (orderPayment.payment_method.slug == "cod") {
        this.eComService.clearCart();
      } else {
        let payuMeta;
        if (orderPayment.payment_method.slug == "payu") {
          payuMeta = {
            name: order.user.name.replace(/\s/g, ''),
            mobile: order.user.mobile_number.replace(/\s/g, ''),
            email: order.user.email.replace(/\s/g, ''),
            bookingId: String(Math.floor(Math.random() * (99 - 10 + 1) + 10)) + String(order.id),
            productinfo: order.vendor.name.replace(/\s/g, ''),
          };
        }
        let navigationExtras: NavigationExtras = { state: { payment: orderPayment, payuMeta: payuMeta, stripeTokenId: stripeTokenId, authorizeNetCard: authorizeNetCard } };
        this.navCtrl.navigateForward(['./process-payment'], navigationExtras);
      }
    }
  }

  ionViewDidEnter() {
    let listenProcessPayment = window.localStorage.getItem("listen_process_payment");
    if (listenProcessPayment && listenProcessPayment.length) {
      let resultProcessPayment = window.localStorage.getItem("result_process_payment");
      this.paymentDone = resultProcessPayment && resultProcessPayment == "true";
      this.processing = false;
      if (this.paymentDone) this.eComService.clearCart();
      window.localStorage.removeItem("listen_process_payment");
    }
  }

  tabs() {
    this.navCtrl.navigateRoot(['./tabs']);
  }

  navMyOrder() {
    this.navCtrl.navigateRoot(['/tabs/my_orders']);
  }
}

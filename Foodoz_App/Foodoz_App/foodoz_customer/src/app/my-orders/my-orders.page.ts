import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Order } from 'src/models/order.models';
import { Subscription } from 'rxjs';
import { NavController, IonContent, AlertController, IonSlides } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { Helper } from 'src/models/helper.models';
import { User } from 'src/models/user.models';
import { AppointeeList } from 'src/models/table-booking.models';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss']
})
export class MyOrdersPage implements OnInit {
  segment = 0;
  @ViewChild(IonContent, { static: true }) content: IonContent;
  private subscriptions = new Array<Subscription>();
  private refresher: any;
  orders = new Array<Order>();
  isLoading = true;
  isLoadingAppointments = true;
  expandedOrderId = -1;
  private pageNo = 1;
  private pageNoAppointments = 1;
  private doneAll = false;
  private doneAllAppointments = false;
  private infiniteScrollEvent;
  private myOrdersRef: firebase.database.Reference;
  userMe: User;
  @ViewChild('slides', { static: true }) slider: IonSlides;

  appointments = new Array<AppointeeList>();
  showDoInfiniteLoading: boolean = false;

  constructor(private router: Router, private navCtrl: NavController, private translate: TranslateService, private alertCtrl: AlertController,
    private uiElementService: UiElementsService, private apiService: ApiService) { }

  ngOnInit() {
    // this.userMe = Helper.getLoggedInUser();
    // if (this.userMe != null) {
    //   this.translate.get("loading").subscribe(value => {
    //     this.uiElementService.presentLoading(value);
    //     this.getOrders();
    //     this.myOrdersRef = firebase.database().ref("users").child(this.userMe.id).child("orders");
    //   });
    // } else {
    //   this.isLoading = false;
    //   this.alertLogin();
    // }

    if (this.router.getCurrentNavigation().extras.state) {
      let initialIndex = this.router.getCurrentNavigation().extras.state.initialIndex;
      if (initialIndex) {
        this.segment = initialIndex;
        this.segmentChanged();
      }
    }
  }

  async segmentChanged() {
    console.log("segment")
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    console.log("slider");
    this.segment = await this.slider.getActiveIndex();
    this.selectTab(this.segment);
  }

  selectTab(event) {
    //this.uiElementService.dismissLoading();
    if (this.userMe != null) {
      if ((!this.orders || !this.orders.length) && event == 0) {
        this.translate.get("loading").subscribe(value => {
          //this.uiElementService.presentLoading(value);
          this.pageNo = 1;
          this.isLoading = true;
          if (this.infiniteScrollEvent) { this.infiniteScrollEvent.target.complete(); }
          if (this.refresher) { this.refresher.target.complete(); }
          this.getOrders();
        });
      } else if ((!this.appointments || !this.appointments.length) && event == 1) {
        this.translate.get("loading").subscribe(value => {
          //this.uiElementService.presentLoading(value);
          this.pageNoAppointments = 1;
          this.isLoadingAppointments = true;
          if (this.infiniteScrollEvent) { this.infiniteScrollEvent.target.complete(); }
          if (this.refresher) { this.refresher.target.complete(); }
          this.getAppointments();
        });
      }

      // this.translate.get("loading").subscribe(value => {
      //   this.uiElementService.presentLoading(value);
      //   console.log(event);
      //   this.pageNo = 1;
      //   this.isLoading = true;
      //   if (this.infiniteScrollEvent) { this.infiniteScrollEvent.target.complete(); }
      //   if (this.refresher) { this.refresher.target.complete(); }
      //   if (event == 0) {
      //     this.orders = [];
      //     this.getOrders();
      //   } else if (event == 1) {
      //     this.appointments = [];
      //     this.getAppointments();
      //   }
      // });
    } else {
      this.isLoading = false;
      this.alertLogin();
    }
  }

  ionViewDidEnter() {
    this.userMe = Helper.getLoggedInUser();
    if (this.userMe != null && (!this.orders || !this.orders.length)) {
      this.translate.get("loading").subscribe(value => {
        //this.uiElementService.presentLoading(value);
        this.getOrders();
        this.myOrdersRef = firebase.database().ref("users").child(this.userMe.id).child("orders");
      });
    } else {
      this.isLoading = false;
      this.alertLogin();
    }
  }

  ionViewWillLeave() {
    // this.pageNo = 1;
    // this.expandedOrderId = -1;
    this.isLoading = true;
    // this.orders = [];
    // this.appointments = [];
    this.unRegisterUpdates();
    //for (let sub of this.subscriptions) sub.unsubscribe();
    //this.uiElementService.dismissLoading();
  }

  doRefresh(refresher) {
    this.unRegisterUpdates();
    if (this.isLoading) refresher.target.complete();
    this.refresher = refresher;
    if (this.segment == 0) {
      this.pageNo = 1;
      this.isLoading = true;
      this.translate.get("loading").subscribe(value => {
        //this.uiElementService.presentLoading(value);
        this.orders = [];
        this.getOrders();
      });
      // this.expandedOrderId = -1;
      // this.getOrders();
    } else if (this.segment == 1) {
      this.pageNoAppointments = 1;
      this.isLoadingAppointments = true;
      this.translate.get("loading").subscribe(value => {
        //this.uiElementService.presentLoading(value);
        this.appointments = [];
        this.getAppointments();
      });
    }
  }

  getOrders() {
    this.apiService.getOrders(this.userMe.id, this.pageNo).subscribe(res => {
      if ((!this.orders || !this.orders.length) && res.data && res.data.length) this.registerUpdates();
      this.orders = this.orders.concat(res.data);
      // this.doneAll = (!res.data || !res.data.length);
      this.doneAll = !res.links.next;
      console.log("all done",this.doneAll);
      if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
      if (this.refresher) this.refresher.target.complete();
      //this.uiElementService.dismissLoading();
      this.reFilter();
      this.isLoading = false;
      this.showDoInfiniteLoading = false;
    }, err => {
      console.log("getOrders", err);
      if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
      if (this.refresher) this.refresher.target.complete();
      this.isLoading = false;
      this.showDoInfiniteLoading = false;
      //this.uiElementService.dismissLoading();
    });
  }

  getAppointments() {
    this.subscriptions.push(this.apiService.getAppointmentList(this.userMe.id, this.pageNoAppointments).subscribe(res => {
      this.appointments = this.appointments.concat(res.data);
      this.doneAllAppointments = !res.links.next;
      this.reFilterAppointments();
      if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
      if (this.refresher) this.refresher.target.complete();
      this.isLoadingAppointments = false;
      this.showDoInfiniteLoading = false;
      //this.uiElementService.dismissLoading();
    }, err => {
      console.log("getAppointmentList", err);
      if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
      if (this.refresher) this.refresher.target.complete();
      this.isLoadingAppointments = false;
      this.showDoInfiniteLoading = false;
      //this.uiElementService.dismissLoading();
    }));

  }

  doInfinite(event) {
    if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
    this.infiniteScrollEvent = event;
    if (this.segment == 0) {
      if (this.doneAll) {
        this.infiniteScrollEvent.target.complete();
      } else {
        this.pageNo = this.pageNo + 1;
        this.showDoInfiniteLoading = true;
        this.getOrders();
      }
    } else if (this.segment == 1) {
      if (this.doneAllAppointments) {
        this.infiniteScrollEvent.target.complete();
      } else {
        this.pageNoAppointments = this.pageNoAppointments + 1;
        this.showDoInfiniteLoading = true;
        this.getAppointments();
      }
    }
  }

  updateStatusOnId(oId: number, oNew: Order) {
    let index = -1;
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].id == oId) {
        index = i;
        break;
      }
    }
    if (index != -1) {

      this.orders[index].status = oNew.status;
      if (oNew.delivery != null) {
        oNew.delivery.delivery.user.image_url = "assets/images/empty_dp";
        if (!oNew.delivery.delivery.user.mediaurls || !oNew.delivery.delivery.user.mediaurls.images) oNew.delivery.delivery.user.mediaurls = { images: [] };
        for (let imgObj of oNew.delivery.delivery.user.mediaurls.images) if (imgObj["default"]) { oNew.delivery.delivery.user.image_url = imgObj["default"]; break; }
        this.orders[index].delivery = oNew.delivery;
      }

      this.orders.unshift(this.orders.splice(index, 1)[0]);
      //this.setupOrderProgress(this.orders[0]);
      this.expandedOrderId = this.orders[0].id;
    }
  }

  private updateOrderInList(orderIn: Order) {
    let index = -1;
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].id == orderIn.id) {
        index = i;
        break;
      }
    }
    if (index != -1) this.orders[index] = orderIn;
  }

  private reFilter() {
    let orderProgress = new Order();
    orderProgress.id = -1;
    orderProgress.type = "orders_in_process";
    let orderPast = new Order();
    orderPast.id = -2;
    orderPast.type = "past_orders";

    let statusesPast = "cancelled,rejected,refund,failed,complete";

    let allOrders = new Array<Order>();
    allOrders.push(orderProgress);
    for (let order of this.orders) if (order.id && order.id > 0 && !statusesPast.includes(order.status)) allOrders.push(order);
    allOrders.push(orderPast);
    for (let order of this.orders) if (order.id && order.id > 0 && statusesPast.includes(order.status)) allOrders.push(order);

    if (allOrders[1].id < 0) allOrders.splice(0, 1);
    if (allOrders[allOrders.length - 1].id < 0) allOrders.splice(allOrders.length - 1, 1);
    this.orders = allOrders.length ? allOrders : [];
  }

  private reFilterAppointments() {
    let appointmentUpcoming = new AppointeeList();
    appointmentUpcoming.id = -1;
    appointmentUpcoming.type = "upcoming_appointments";
    let appointmentPast = new AppointeeList();
    appointmentPast.id = -2;
    appointmentPast.type = "past_appointments";

    let statusesPast = "cancelled,rejected,complete";

    let allAppointments = new Array<AppointeeList>();
    allAppointments.push(appointmentUpcoming);
    for (let order of this.appointments) if (order.id && order.id > 0 && (!statusesPast.includes(order.status) && !order.isPassed)) allAppointments.push(order);
    allAppointments.push(appointmentPast);
    for (let order of this.appointments) if (order.id && order.id > 0 && (statusesPast.includes(order.status) || order.isPassed)) allAppointments.push(order);

    if (allAppointments[1].id < 0) allAppointments.splice(0, 1);
    if (allAppointments[allAppointments.length - 1].id < 0) allAppointments.splice(allAppointments.length - 1, 1);
    this.appointments = allAppointments.length ? allAppointments : [];
  }

  toggleOrderExpansion(order: Order) {
    // this.expandedOrderId = Number((this.expandedOrderId == order.id) ? -1 : order.id);
    let navigationExtras: NavigationExtras = { state: { order: order } };
    this.navCtrl.navigateForward(['./order-detail'], navigationExtras);
  }

  // navTrackOrder(order: Order) {
  //   if (this.canTrack(order)) {
  //     let navigationExtras: NavigationExtras = { state: { delivery: order.delivery, address: order.address, vendor: { name: order.vendor.name, image: order.vendor.image, location: { latitude: order.vendor.latitude, longitude: order.vendor.longitude } } } };
  //     this.navCtrl.navigateForward(['./order-tracking'], navigationExtras);
  //   } else {
  //     this.translate.get("track_unavailable").subscribe(value => this.uiElementService.presentToast(value));
  //   }
  // }

  // canTrack(order): boolean {
  //   //return order.delivery != null && order.delivery.delivery != null;
  //   return (order.status == "dispatched" || order.status == "intransit") && order.delivery != null && order.delivery.delivery != null;
  // }

  navReviewProduct(order: Order) {
    let navigationExtras: NavigationExtras = { state: { order: order } };
    this.navCtrl.navigateForward(['./add-review'], navigationExtras);
  }

  cancelConfirmation(order: Order) {
    this.translate.get(["cancel_order_title", "cancel_order_body", "no", "yes", "order_status_cancelled", "just_moment"]).subscribe(values => {
      this.alertCtrl.create({
        header: values["cancel_order_title"],
        message: values["cancel_order_body"],
        buttons: [{
          text: values["no"],
          handler: () => { }
        }, {
          text: values["yes"],
          handler: () => {
            this.uiElementService.presentLoading(values["just_moment"]);
            this.subscriptions.push(this.apiService.updateOrder(order.id, { "status": "cancelled" }).subscribe(res => {
              this.updateOrderInList(res);
              this.reFilter();
              this.uiElementService.presentToast(values["order_status_cancelled"]);
              this.uiElementService.dismissLoading();
            }, err => {
              console.log("updateOrder", err);
              this.uiElementService.dismissLoading();
            }));
          }
        }]
      }).then(alert => alert.present());
    });
  }

  registerUpdates() {
    const component = this;
    if (this.myOrdersRef != null) {
      this.myOrdersRef.on('child_changed', function (data) {
        var fireOrder = data.val() as { data: Order };
        console.log(fireOrder);
        if (fireOrder.data != null) component.updateStatusOnId(fireOrder.data.id, fireOrder.data);
      });
    }
  }

  unRegisterUpdates() {
    if (this.myOrdersRef != null) {
      this.myOrdersRef.off();
    }
  }

  alertLogin() {
    if (Helper.getLoggedInUser() == null) {
      this.translate.get("alert_login_short").subscribe(value => this.uiElementService.presentToast(value));
      this.navCtrl.navigateForward(['./phone-number']);
    }
  }


}

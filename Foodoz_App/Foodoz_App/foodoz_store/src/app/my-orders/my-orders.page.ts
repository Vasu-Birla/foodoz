import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../services/network/api.service';
import { Order } from 'src/models/order.models';
import { Helper } from 'src/models/helper.models';
import { Profile } from 'src/models/profile.models';
import { NavigationExtras } from '@angular/router';
import * as firebase from 'firebase/app';
import * as moment from 'moment';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss']
})
export class MyOrdersPage implements OnInit, OnDestroy {
  showOrder: string = "active";
  private myOrdersRef: firebase.database.Reference;
  private refresher: any;
  pastOrdersList = new Array<Order>();
  inProgressOrdersList = new Array<Order>();
  isLoadingPending = true;
  private pageNoPending = 1;
  private doneAllPending = false;
  isLoadingPast = true;
  private pageNoPast = 1;
  private doneAllPast = false;
  private infiniteScrollEvent;
  private profile: Profile;
  private latestOrderMillis: number;

  @ViewChild('slides', { static: true }) slider: IonSlides;
  startTimmer: any;

  constructor(private navCtrl: NavController, private translate: TranslateService, private apiService: ApiService) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.profile = Helper.getProfile();
    if (this.showOrder == "active" && (!this.inProgressOrdersList || !this.inProgressOrdersList.length || !this.pastOrdersList || !this.pastOrdersList.length)) {
      this.translate.get("loading").subscribe(value => {
        //this.uiElementService.presentLoading(value);
        if (!this.inProgressOrdersList || !this.inProgressOrdersList.length) this.getOrdersPending();
        if (!this.pastOrdersList || !this.pastOrdersList.length) this.getOrdersPast();
      });
    }
  }

  ngOnDestroy() {
    console.log("DESTROYED");
    this.unRegisterUpdates();
    //for (let sub of this.subscriptions) sub.unsubscribe();
    //this.uiElementService.dismissLoading();
    clearInterval(this.startTimmer);
  }

  // slideDidChange() {
  //   if(!this.clickTab){
  //     this.showOrder = this.showOrder == 'active' ? 'past' : 'active';
  //     this.selectTab(this.showOrder, false);
  //   }
  // }
  async segmentChanged() {
    await this.slider.slideTo(this.showOrder == 'active' ? 0 : 1);
  }

  async slideChanged() {
    let tabIndex = await this.slider.getActiveIndex();
    this.selectTab(tabIndex == 0 ? 'active' : 'past');
  }

  selectTab(event) {
    this.showOrder = event ? event : 'active'
    if (this.showOrder == 'active') {
      if (!this.inProgressOrdersList || !this.inProgressOrdersList.length) {
        //this.uiElementService.presentLoading(this.translate.instant("loading"));
        clearInterval(this.startTimmer);
        if (this.infiniteScrollEvent) { this.infiniteScrollEvent.target.complete(); this.infiniteScrollEvent.target.disabled = true; };
        if (this.refresher) { this.refresher.target.complete(); }
        this.getOrdersPending();
      }
    } else if (this.showOrder == 'past') {
      if (!this.pastOrdersList || !this.pastOrdersList.length) {
        //this.uiElementService.presentLoading(this.translate.instant("loading"));
        // clearInterval(this.startTimmer);
        if (this.infiniteScrollEvent) { this.infiniteScrollEvent.target.complete(); this.infiniteScrollEvent.target.disabled = true; };
        if (this.refresher) { this.refresher.target.complete(); }
        this.getOrdersPast();
      }
    }
  }

  getOrdersPending() {
    this.isLoadingPending = true;
    this.apiService.getOrders(this.pageNoPending, this.profile.id, "active").subscribe(res => {
      if (res.data && res.data.length) {
        if (!this.latestOrderMillis || this.latestOrderMillis < res.data[0].created_at_milliseconds) this.latestOrderMillis = res.data[0].created_at_milliseconds;
      }
      this.inProgressOrdersList = this.inProgressOrdersList.concat(res.data);
      //this.initTimer();
      this.registerUpdates();
      this.doneAllPending = !res.links.next;
      this.isLoadingPending = false;
      if (this.infiniteScrollEvent) { this.infiniteScrollEvent.target.complete(); this.infiniteScrollEvent.target.disabled = true; };
      if (this.refresher) this.refresher.target.complete();
      //this.uiElementService.dismissLoading();
    }, err => {
      console.log("getOrdersPending", err);
      this.isLoadingPending = false;
      if (this.infiniteScrollEvent) { this.infiniteScrollEvent.target.complete(); this.infiniteScrollEvent.target.disabled = true; };
      if (this.refresher) this.refresher.target.complete();
      //this.uiElementService.dismissLoading();
    });
  }

  getOrdersPast() {
    this.isLoadingPast = true;
    this.apiService.getOrders(this.pageNoPast, this.profile.id, "past").subscribe(res => {
      this.pastOrdersList = this.pastOrdersList.concat(res.data);
      this.doneAllPast = !res.links.next;
      this.isLoadingPast = false;
      if (this.infiniteScrollEvent) { this.infiniteScrollEvent.target.complete(); this.infiniteScrollEvent.target.disabled = true; };
      if (this.refresher) this.refresher.target.complete();
      //this.uiElementService.dismissLoading();
    }, err => {
      console.log("getOrdersPast", err);
      this.isLoadingPast = false;
      if (this.infiniteScrollEvent) { this.infiniteScrollEvent.target.complete(); this.infiniteScrollEvent.target.disabled = true; };
      if (this.refresher) this.refresher.target.complete();
      //this.uiElementService.dismissLoading();
    });
  }

  // private initTimer() {
  //   this.startTimmer = setInterval(() => {
  //     for (let o of this.inProgressOrdersList) this.setupColorProgress(o);
  //   }, 1000);
  // }

  // setupColorProgress(order: Order) {
  //   var seconds = (moment().toDate().getTime() - order.created_at_milliseconds);
  //   // console.log('cecond',moment().toDate().getTime(),this.apiService.times.find(key => key.key == this.profile.meta.green_time).value);
  //   if (this.profile && this.profile.meta && this.profile.meta.green_time && this.profile.meta.yellow_time && this.profile.meta.red_time) {
  //     if (seconds <= Number(this.profile.meta.green_time)) {
  //       order.colorProgress = "green_time";
  //     } else if (seconds <= Number(this.profile.meta.yellow_time)) {
  //       order.colorProgress = "yellow_time";
  //     } else {
  //       order.colorProgress = "red_time";
  //     }
  //     // if (this.countLength == this.orders.length) clearInterval(this.startTimmer);
  //     // console.log(order.colorProgress, this.countLength)
  //   }
  //   // console.log(order.colorProgress, this.countLength)
  //   order.showOrderPalceTime = this.msToTime(seconds);
  // }

  // msToTime(duration) {
  //   var seconds = Math.floor((duration / 1000) % 60),
  //     minutes = Math.floor((duration / (1000 * 60)) % 60),
  //     hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  //   var hour = (hours < 10) ? "0" + hours : hours;
  //   var minute = (minutes < 10) ? "0" + minutes : minutes;
  //   var second = (seconds < 10) ? "0" + seconds : seconds;

  //   return hour + ":" + minute + ":" + second;
  // }

  doInfinite(event) {
    if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
    this.infiniteScrollEvent = event;
    if (this.showOrder == "active") {
      if (this.doneAllPending) {
        this.infiniteScrollEvent.target.complete();
      } else {
        this.pageNoPending = this.pageNoPending + 1;
        this.getOrdersPending();
      }
    } else if (this.showOrder == "past") {
      if (this.doneAllPast) {
        this.infiniteScrollEvent.target.complete();
      } else {
        this.pageNoPast = this.pageNoPast + 1;
        this.getOrdersPast();
      }
    }
  }

  doRefresh(refresher) {

    if (this.refresher) this.refresher.target.complete();
    this.refresher = refresher;

    if (this.showOrder == "active") {
      clearInterval(this.startTimmer);
      this.unRegisterUpdates();
      this.pageNoPending = 1;
      this.inProgressOrdersList = [];
      this.getOrdersPending();
    } else {
      this.pageNoPast = 1;
      this.pastOrdersList = [];
      this.getOrdersPast();
    }
  }

  navOrderInfo(order: Order) {
    // if (!order.is_guest) {
    let navigationExtras: NavigationExtras = { state: { order: order } };
    this.navCtrl.navigateForward(['./order-info'], navigationExtras);
    // }
  }

  addFireOrder(newOrder: Order) {
    if (!(newOrder.status == "new" || newOrder.status == "pending")) return;
    let newOrderCreateMillis = moment(newOrder.created_at).toDate().getTime();
    if (newOrderCreateMillis > this.latestOrderMillis) {
      this.latestOrderMillis = newOrderCreateMillis;

      let existingIndex = -1
      if (this.inProgressOrdersList) {
        for (let i = 0; i < this.inProgressOrdersList.length; i++) {
          if (this.inProgressOrdersList[i].id == newOrder.id) {
            existingIndex = i;
            break;
          }
        }
      }

      this.apiService.setupOrder(newOrder);
      if (existingIndex == -1) {
        this.inProgressOrdersList.unshift(newOrder);
      } else {
        this.inProgressOrdersList[existingIndex] = newOrder;
      }
    }
  }

  updateStatusOnId(oId: number, oNew: Order) {
    let index = -1;
    for (let i = 0; i < this.inProgressOrdersList.length; i++) {
      if (this.inProgressOrdersList[i].id == oId) {
        index = i;
        break;
      }
    }
    console.log("found at ", index);
    if (index != -1) {
      this.apiService.setupOrder(oNew);
      this.inProgressOrdersList[index] = oNew;
      if (this.isOrderUpdateable(oNew)) { this.inProgressOrdersList.unshift(this.inProgressOrdersList.splice(index, 1)[0]); } else { this.pastOrdersList.unshift(this.inProgressOrdersList.splice(index, 1)[0]); }
    }
  }

  private isOrderUpdateable(order: Order): boolean {
    let toReturn = true;
    if (order != null) {
      if (order.status == "cancelled" || order.status == "refund" || order.status == "rejected" || order.status == "failed" || order.status == "complete") {
        toReturn = false;
      }
    }
    return toReturn;
  }

  registerUpdates() {
    const component = this;
    if (!this.myOrdersRef) {
      this.myOrdersRef = firebase.database().ref("vendors").child(String(this.profile.id)).child("orders");
      this.myOrdersRef.on('child_added', function (data) {
        var fireOrder = data.val() as { data: Order };
        // console.log("child_added", fireOrder);
        if (fireOrder.data != null) component.addFireOrder(fireOrder.data);
      });
      this.myOrdersRef.on('child_changed', function (data) {
        var fireOrder = data.val() as { data: Order };
        console.log("child_changed", fireOrder);
        if (fireOrder.data != null) component.updateStatusOnId(fireOrder.data.id, fireOrder.data);
      });
    }
  }

  unRegisterUpdates() {
    if (this.myOrdersRef) {
      this.myOrdersRef.off();
      this.myOrdersRef = null;
    }
  }

}

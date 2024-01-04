import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Profile } from 'src/models/profile.models';
import { Helper } from 'src/models/helper.models';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { Subscription } from 'rxjs';
import { GoogleMapsService } from '../services/network/google-maps.service';
import { MyEventsService } from '../services/events/my-events.service';
import { OrderInsight } from 'src/models/insight-order.models';
import * as firebase from 'firebase';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  @ViewChild("pleaseConnect", { static: true }) pleaseConnect: ElementRef;
  @ViewChild("map", { static: true }) mapElement: ElementRef;
  private subscriptions = new Array<Subscription>();
  private initialized = false;
  private markerMe: google.maps.Marker;
  profile = new Profile();
  currency_icon: string;
  distance_metric = "km";
  insightsOrder = new OrderInsight();

  constructor(private navCtrl: NavController, private translate: TranslateService, private myEvent: MyEventsService,
    private uiElementService: UiElementsService, private apiService: ApiService, private maps: GoogleMapsService) { }

  ngOnInit() {
    // this.navCtrl.navigateForward(['./new-delivery'])
    let dm = Helper.getSettingValue("distance_metric");
    if (dm != null) this.distance_metric = dm.toLowerCase();
    this.subscriptions.push(this.myEvent.getLocationObservable().subscribe(location => {
      if (this.initialized && location != null) this.plotMarker(new google.maps.LatLng(Number(location.latitude), Number(location.longitude)));
    }));
  }

  ionViewWillLeave() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  ionViewDidEnter() {
    this.profile = Helper.getProfile();

    if (!this.initialized) {
      let selectedLocation = Helper.getLocation();
      let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement, selectedLocation).then(() => {
        this.initialized = true;
        if (selectedLocation != null) this.plotMarker(new google.maps.LatLng(Number(selectedLocation.latitude), Number(selectedLocation.longitude)));
      }).catch(err => console.log(err));
      mapLoaded.catch(err => console.log(err));
    }

    let recheck = window.localStorage.getItem("recheck");
    if (recheck != null) this.checkDeliveryRequest();
    window.localStorage.removeItem("recheck");
    if (this.profile.is_online != 1) this.loadDeliverySummary();
  }

  plotMarker(pos: google.maps.LatLng) {
    if (!this.markerMe) {
      this.markerMe = new google.maps.Marker({ position: pos, map: this.maps.map, icon: 'assets/images/deliveryman.png' });
    } else {
      this.markerMe.setPosition(pos);
    }
    this.maps.map.panTo(pos);
  }

  toggleOnline() {
    if (this.profile == null || this.profile.id == null) this.profile = Helper.getProfile();
    this.translate.get(["updating", "something_wrong"]).subscribe(values => {
      this.uiElementService.presentLoading(values["updating"]);
      this.subscriptions.push(this.apiService.updateProfile({ is_online: this.profile.is_online == 1 ? 0 : 1 }, this.profile.id).subscribe(res => {
        this.profile = res;
        this.uiElementService.dismissLoading();
        if (this.profile.is_online != 1) this.loadDeliverySummary();
        this.myEvent.setProfileData(res);
      }, err => {
        console.log("updateOrder", err);
        this.uiElementService.presentToast(values["something_wrong"]);
        this.uiElementService.dismissLoading();
      }));
    });
  }

  loadDeliverySummary() {
    this.currency_icon = Helper.getSettingValue("currency_icon");
    if (this.profile == null || this.profile.id == null) this.profile = Helper.getProfile();
    let insightRequest = { duration: "hours", limit: Number(moment(new Date().getHours())) };
    // let insightRequest = { duration: "years", limit: 12 };

    // const component = this;
    // let refDeliveryStatAll = firebase.database().ref().child("deliveries").child(String(Helper.getProfile().id)).child("order_stats");
    // refDeliveryStatAll.once('value').then(function (snapshot) {
    //   let deliveryStats = new Array<{ distance: number, duration: number }>();
    //   if (snapshot.exists()) {
    //     let data = snapshot.val();
    //     if (data != null) for (var prop in data) if (Object.prototype.hasOwnProperty.call(data, prop)) deliveryStats.push(data[prop]);
    //   }

    //   component.subscriptions.push(component.apiService.getInsightOrder(component.profile.id, insightRequest).subscribe(res => {
    //     component.insightsOrder = res;
    //     component.reFilterTravelledStat(deliveryStats);
    //   }, err => console.log("insights", err)));

    // });
    this.subscriptions.push(this.apiService.getInsightOrder(this.profile.id, insightRequest).subscribe(res => {
      this.insightsOrder = res;
      this.insightsOrder.distance_travelled = Number(Helper.formatDistance(res.distance_travelled ? Number(res.distance_travelled) : 0, this.distance_metric));
    }, err => console.log("insights", err)));
  }

  // private reFilterTravelledStat(deliveryStats) {
  //   let totalDistance = 0;
  //   if (this.insightsOrder.orders_count && deliveryStats) {
  //     let limit = this.insightsOrder.orders_count > deliveryStats.length ? deliveryStats.length : this.insightsOrder.orders_count;
  //     for (let i = 0; i < limit; i++) totalDistance += deliveryStats[i].distance;
  //   }
  //   this.insightsOrder.distance_travelled = Number(Helper.formatDistance(totalDistance, this.distance_metric));
  // }

  checkDeliveryRequest() {
    if (this.profile == null || this.profile.id == null) this.profile = Helper.getProfile();
    this.translate.get(["just_moment", "something_wrong"]).subscribe(values => {
      this.uiElementService.presentLoading(values["just_moment"]);
      this.subscriptions.push(this.apiService.updateProfile({ is_online: 1 }, this.profile.id).subscribe(res => {
        this.profile = res;
        this.uiElementService.dismissLoading();
        this.myEvent.setProfileData(res);
      }, err => {
        console.log("updateOrder", err);
        this.uiElementService.presentToast(values["something_wrong"]);
        this.uiElementService.dismissLoading();
      }));
    });
  }
}

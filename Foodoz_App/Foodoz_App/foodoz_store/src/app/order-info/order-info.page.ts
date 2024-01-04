import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { ChatCustomerPage } from '../chat-customer/chat-customer.page';
import { Order } from 'src/models/order.models';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { GoogleMapsService } from '../services/network/google-maps.service';
import { Subscription } from 'rxjs';
import { MyAddress } from 'src/models/address.models';
import { Chat } from 'src/models/chat.models';
import { Constants } from 'src/models/constants.models';
import { User } from 'src/models/user.models';
import createHTMLMapMarker from '../../assets/scripts/html-map-marker.js';
import * as firebase from 'firebase/app';
import { Helper } from 'src/models/helper.models';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.page.html',
  styleUrls: ['./order-info.page.scss']
})
export class OrderInfoPage implements OnInit, OnDestroy {
  @ViewChild("pleaseConnect", { static: true }) pleaseConnect: ElementRef;
  @ViewChild("map", { static: true }) mapElement: ElementRef;
  viewType: string;
  viewTypeB: string;
  private subscriptions = new Array<Subscription>();
  private myMenuItemsRef: firebase.database.Reference;
  private myTableStatusRef: firebase.database.Reference;
  order: Order;
  canUpdate = true;

  private initialized = false;
  private markerDeliveryGuy;
  private posDeliveryGuy;
  private numDeltas = 100;
  private delay = 10; //milliseconds
  private i = 0;
  private deltaLat;
  private deltaLng;
  private lastToPos = [0, 0];
  userMe: User;

  constructor(private router: Router, private translate: TranslateService,private navCtrl: NavController,
    private modalController: ModalController, private alertCtrl: AlertController, private callNumber: CallNumber,
    private uiElementService: UiElementsService, private apiService: ApiService, private maps: GoogleMapsService) { }

  ngOnInit() {
    let profile = Helper.getProfile();
    this.myMenuItemsRef = firebase.database().ref("vendors").child(String(profile.id)).child("order_products");
    this.myTableStatusRef = firebase.database().ref("vendors").child(String(profile.id)).child("table_status");
    if (this.router.getCurrentNavigation().extras.state) this.order = this.router.getCurrentNavigation().extras.state.order; else this.navCtrl.pop();
    this.canUpdate = this.isOrderUpdateable();
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  ionViewDidEnter() {
    if (!this.initialized && !this.order.is_guest) {
      console.log('calll')
      let address = new MyAddress();
      address.latitude = this.order.vendor.latitude;
      address.longitude = this.order.vendor.longitude;
      let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement, address).then(() => {
        this.initialized = true;
        this.plotMarkers();
        this.registerUpdates();
      }).catch(err => { console.log("maps.init", err); });
      mapLoaded.catch(err => { console.log("mapLoaded", err); });
    }
  }

  private plotMarkers() {
    let posMe = new google.maps.LatLng(Number(this.order.vendor.latitude), Number(this.order.vendor.longitude));
    let markerMe = new google.maps.Marker({
      position: posMe, map: this.maps.map,
      icon: {
        url: 'assets/images/start.png',
        // scaledSize: new google.maps.Size(60, 60)
      }
    });
    markerMe.addListener('click', (event) => this.uiElementService.presentToast(this.order.vendor.name));

    let posCustomer = new google.maps.LatLng(Number(this.order.address.latitude), Number(this.order.address.longitude));
    // let markerCustomer = createHTMLMapMarker({
    //   latlng: posCustomer,
    //   map: this.maps.map,
    //   html: '<div id="doctor_map"><img src="' + this.order.user.image_url + '"></div>'
    // });
    let markerCustomer = new google.maps.Marker({
      position: posCustomer,
      map: this.maps.map,
      icon: {
        url: 'assets/images/drop.png',
        // scaledSize: new google.maps.Size(60, 60)
      }
    })
    markerCustomer.addListener('click', (event) => this.uiElementService.presentToast(this.order.user.name));

    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer({
      map: this.maps.map,
      polylineOptions: {
        strokeColor: '#279411',
        strokeOpacity: 1.0,
        strokeWeight: 5
      },
      markerOptions: {
        opacity: 0,
        clickable: false,
        position: posCustomer
      }
    });
    let dirReq: any = {
      origin: posMe,
      destination: posCustomer,
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(dirReq, function (result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(result);
      }
    });

    if (this.order.delivery && this.order.delivery.delivery.latitude && this.order.delivery.delivery.longitude) {
      this.posDeliveryGuy = new google.maps.LatLng(Number(this.order.delivery.delivery.latitude), Number(this.order.delivery.delivery.longitude));
      // this.markerDeliveryGuy = createHTMLMapMarker({
      //   latlng: this.posDeliveryGuy,
      //   map: this.maps.map,
      //   html: '<div id="doctor_map"><img src="' + this.order.delivery.delivery.user.image_url + '"></div>'
      // });
      this.markerDeliveryGuy = new google.maps.Marker({
        position: this.posDeliveryGuy,
        map: this.maps.map,
        icon: {
          url: 'assets/images/deliveryman.png',
          // scaledSize: new google.maps.Size(60, 60)
        }
      })
      this.markerDeliveryGuy.addListener('click', (event) => this.uiElementService.presentToast(this.order.delivery.delivery.user.name));
    }
  }

  private registerUpdates() {
    if (this.order.delivery && this.order.delivery.delivery.latitude && this.order.delivery.delivery.longitude) {
      //location updates
      this.updatesLocation();
    }
  }

  private updatesLocation() {
    const component = this;
    firebase.database().ref("deliveries").child(String(this.order.delivery.delivery.id)).child("location").on('child_changed', function (data) {
      var fireLocation = data.val() as { latitude: string, longitude: string };
      if (fireLocation.latitude != null && fireLocation.longitude != null) component.onNewLocation(new google.maps.LatLng(Number(fireLocation.latitude), Number(fireLocation.longitude)));
    });
  }

  private onNewLocation(newPos: google.maps.LatLng) {
    if (!this.posDeliveryGuy || !newPos.equals(this.posDeliveryGuy)) {

      if (this.posDeliveryGuy != null) {
        this.i = 0;
        this.lastToPos[0] = this.posDeliveryGuy.lat();
        this.lastToPos[1] = this.posDeliveryGuy.lng();
        this.deltaLat = (newPos.lat() - this.lastToPos[0]) / this.numDeltas;
        this.deltaLng = (newPos.lng() - this.lastToPos[1]) / this.numDeltas;
      }

      if (this.markerDeliveryGuy == null) {
        // this.markerDeliveryGuy = createHTMLMapMarker({
        //   latlng: this.posDeliveryGuy,
        //   map: this.maps.map,
        //   html: '<div id="doctor_map"><img src="' + this.order.delivery.delivery.user.image_url + '"></div>'
        // });
        this.markerDeliveryGuy = new google.maps.Marker({
          position: this.posDeliveryGuy,
          map: this.maps.map,
          icon: {
            url: 'assets/images/deliveryman.png',
            // scaledSize: new google.maps.Size(60, 60)
          }
        })
        this.markerDeliveryGuy.addListener('click', (event) => this.uiElementService.presentToast(this.order.delivery.delivery.user.name));
      } else {
        //this.markerDeliveryGuy.setPosition(this.posDeliveryGuy);
        this.moveMarker();
      }
      this.maps.map.panTo(this.posDeliveryGuy);

    }
  }

  private moveMarker() {
    this.lastToPos[0] = this.lastToPos[0] + this.deltaLat;
    this.lastToPos[1] = this.lastToPos[1] + this.deltaLng;
    let newToPos = new google.maps.LatLng(Number(this.lastToPos[0]), Number(this.lastToPos[1]));
    this.markerDeliveryGuy.setPosition(newToPos);
    this.posDeliveryGuy = newToPos;
    if (this.i != this.numDeltas) {
      this.i++;
      // setTimeout(() => this.moveMarker(), this.delay);
    }
    //  else {
    //   this.requestDirection(this.lastTo);
    // }
  }

  confirmUpdate(status) {
    let keyTitle = status == "accepted" ? "confirm_accept_title" : "confirm_reject_title";
    let keyMessage = status == "accepted" ? "confirm_accept_message" : "confirm_reject_message";
    this.translate.get([keyTitle, keyMessage, "yes", "no"]).subscribe(values => {
      this.alertCtrl.create({
        header: values[keyTitle],
        message: values[keyMessage],
        buttons: [{
          text: values["no"],
          handler: () => { }
        }, {
          text: values["yes"],
          handler: () => {
            this.updateOrderStatus(status);
          }
        }]
      }).then(alert => alert.present());
    });
  }

  checkAndupdateOrder() {
    this.translate.get(["just_moment", "something_wrong"]).subscribe(values => {
      this.uiElementService.presentLoading(values["just_moment"]);
      this.subscriptions.push(this.apiService.getOrderById(this.order.id).subscribe(res => {
        this.order = res;
        this.canUpdate = this.isOrderUpdateable();
        this.uiElementService.dismissLoading();
        this.updateOrder();
      }, err => {
        console.log("updateOrder", err);
        this.uiElementService.presentToast(values["something_wrong"]);
        this.uiElementService.dismissLoading();
      }));
    });
  }


  private updateOrder() {
    let toUpdate = null;
    switch (this.order.status) {
      case "new":
      case "pending":
        toUpdate = "accepted";
        break;
      // case "accepted":
      //   toUpdate = "preparing";
      //   break;
      // case "preparing":
      //   toUpdate = "prepared";
      //   break;
      case "accepted":
        toUpdate = "prepared";
        break;
      case "prepared":
        if (this.order.order_type == "normal") {
          if (this.order.delivery == null) {
            this.translate.get("delivery_na").subscribe(value => this.uiElementService.presentToast(value));
          } else if (this.order.delivery.status == "new" || this.order.delivery.status == "pending" || this.order.delivery.status == "allotted") {
            this.translate.get("delivery_left_na").subscribe(value => this.uiElementService.presentToast(value));
          } else {
            toUpdate = "dispatched";
          }
        } else {
          toUpdate = "complete";
        }
        break;
    }
    if (toUpdate != null) this.updateOrderStatus(toUpdate);
  }

  updateOrderStatus(statusToUpdate) {
    this.translate.get(["updating", "something_wrong"]).subscribe(values => {
      this.uiElementService.presentLoading(values["updating"]);
      let updateRequest: any = { status: statusToUpdate };
      if (statusToUpdate == "prepared" || statusToUpdate == "complete") {
        let orderMeta = this.order.meta;
        orderMeta.product_ids_done = [];
        for (let pro of this.order.products) orderMeta.product_ids_done.push(pro.id);
        updateRequest.meta = JSON.stringify(orderMeta);
      }
      this.subscriptions.push(this.apiService.updateOrder(this.order.id, updateRequest).subscribe(res => {
        this.order.status = res.status;
        this.translate.get(("order_status_message_" + res.status)).subscribe(value => this.uiElementService.presentToast(value));

        let productIdsDone = [];
        for (let pro of this.order.products) productIdsDone.push(pro.id);
        if (this.myMenuItemsRef && (this.order.status == "prepared" || this.order.status == "complete")) this.myMenuItemsRef.child(String(this.order.id)).set({ order_id: this.order.id, product_ids_done: productIdsDone });
        if (this.myTableStatusRef && this.order.status == "complete" && this.order.meta.table) this.myTableStatusRef.child(String(this.order.meta.table)).child("occupied").set(false);

        this.canUpdate = this.isOrderUpdateable();
        this.uiElementService.dismissLoading();
      }, err => {
        console.log("updateOrder", err);
        this.uiElementService.presentToast(values["something_wrong"]);
        this.uiElementService.dismissLoading();
      }));
    });
  }

  private isOrderUpdateable(): boolean {
    let toReturn = true;
    if (this.order != null) {
      if (this.order.status == "cancelled" || this.order.status == "refund" || this.order.status == "hold" || this.order.status == "rejected" || this.order.status == "failed" || this.order.status == "dispatched" || this.order.status == "intransit" || this.order.status == "complete") {
        toReturn = false;
      }
    }
    return toReturn;
  }

  setViewType(vt) {
    this.viewType = vt;
  }
  setViewTypeB(vt, setview?) {
    if (setview == 'setview') this.viewType = vt;
    this.viewTypeB = vt;
  }

  navChat(role: string) {
    let chat = new Chat();
    chat.chatId = role == Constants.ROLE_DELIVERY ? (this.order.delivery.delivery.user.id + Constants.ROLE_DELIVERY) : (this.order.user_id + Constants.ROLE_USER);
    chat.chatImage = role == Constants.ROLE_DELIVERY ? this.order.delivery.delivery.user.image_url : this.order.user.image_url;
    chat.chatName = role == Constants.ROLE_DELIVERY ? this.order.delivery.delivery.user.name : this.order.user.name;
    chat.chatStatus = role == Constants.ROLE_DELIVERY ? this.translate.instant("delivery_partner") : (this.translate.instant("order_id") + this.order.id + " | " + this.order.created_at);
    chat.myId = this.order.vendor.user_id + Constants.ROLE_VENDOR;

    let dialing_number = role == Constants.ROLE_DELIVERY ? this.order.delivery.delivery.user.mobile_number : this.order.user.mobile_number
    this.modalController.create({ component: ChatCustomerPage, componentProps: { chat: chat, dialing_number: dialing_number } }).then((modalElement) => modalElement.present());
  }

  dialDriver() {
    if (this.order && this.order.delivery && this.order.delivery.delivery && this.order.delivery.delivery.user && this.order.delivery.delivery.user.mobile_number) {
      this.callNumber.callNumber(this.order.delivery.delivery.user.mobile_number, false).then(res => console.log('Launched dialer!', res)).catch(err => console.log('Error launching dialer', err));
    } else {
      this.translate.get("phone_unavailable").subscribe(value => this.uiElementService.presentToast(value));
    }
  }

  dialCustomer() {
    let dailingNumber = this.order.is_guest ? this.order.customer_mobile : (this.order.user ? this.order.user.mobile_number : "");
    if (dailingNumber && dailingNumber.length) {
      this.callNumber.callNumber(dailingNumber, false).then(res => console.log('Launched dialer!', res)).catch(err => console.log('Error launching dialer', err));
    } else {
      this.translate.get("phone_unavailable").subscribe(value => this.uiElementService.presentToast(value));
    }
  }

  // chatDeliveryPartner() {
  //   this.modalController.create({ component: ChatDeliveryPartnerPage }).then((modalElement) => {
  //     modalElement.present();
  //   }
  //   )
  // }
}

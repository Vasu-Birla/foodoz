import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ChatPage } from '../chat/chat.page';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Order } from 'src/models/order.models';
import { Constants } from 'src/models/constants.models';
import { Chat } from 'src/models/chat.models';
import { GoogleMapsService } from '../services/network/google-maps.service';
import { UiElementsService } from '../services/common/ui-elements.service';
import { MyAddress } from 'src/models/address.models';
import createHTMLMapMarker from '../../assets/scripts/html-map-marker.js';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss']
})
export class OrderDetailPage implements OnInit {
  @ViewChild("pleaseConnect", { static: true }) pleaseConnect: ElementRef;
  @ViewChild("map", { static: true }) mapElement: ElementRef;
  fabAction = false;
  private subscriptions = new Array<Subscription>();
  order: Order;

  private initialized = false;
  private markerDeliveryGuy;
  private posDeliveryGuy;

  private numDeltas = 100;
  private delay = 10; //milliseconds
  private i = 0;
  private deltaLat;
  private deltaLng;
  private lastToPos = [0, 0];

  constructor(private router: Router, private navCtrl: NavController, private translate: TranslateService, private uiElementService: UiElementsService,
    private modalController: ModalController, private callNumber: CallNumber, private maps: GoogleMapsService) { }

  ngOnInit() {
    if (this.router.getCurrentNavigation().extras.state) this.order = this.router.getCurrentNavigation().extras.state.order;
    console.log(this.order)
  }

  ionViewDidEnter() {
    if (!this.initialized) {
      let address = new MyAddress();
      address.latitude = this.order.address.latitude;
      address.longitude = this.order.address.longitude;
      let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement, address).then(() => {
        this.initialized = true;
        this.plotMarkers();
        this.registerUpdates();
      }).catch(err => { console.log("maps.init", err); });
      mapLoaded.catch(err => { console.log("mapLoaded", err); });
    }
  }

  private plotMarkers() {
    let posMe = new google.maps.LatLng(Number(this.order.address.latitude), Number(this.order.address.longitude));
    let markerMe = new google.maps.Marker({
      position: posMe, map: this.maps.map,
      icon: 'assets/images/drop.png'
    });
    markerMe.addListener('click', (event) => this.uiElementService.presentToast(this.order.user.name));

    let posVendor = new google.maps.LatLng(Number(this.order.vendor.latitude), Number(this.order.vendor.longitude));
    // let markerVendor = createHTMLMapMarker({
    //   latlng: posVendor,
    //   map: this.maps.map,
    //   html: '<div id="doctor_map"><img src="' + this.order.vendor.image + '"></div>'
    // });
    let markerVendor = new google.maps.Marker({
      position: posVendor, map: this.maps.map,
      icon: 'assets/images/start.png'
    });
    markerVendor.addListener('click', (event) => this.uiElementService.presentToast(this.order.vendor.name));

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
        position: posVendor
      }
    });
    let dirReq: any = {
      origin: posVendor,
      destination: posMe,
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
        position: this.posDeliveryGuy, map: this.maps.map,
        icon: 'assets/images/deliveryman.png'
      });
      this.markerDeliveryGuy.addListener('click', (event) => this.uiElementService.presentToast(this.order.delivery.delivery.user.name));
    }
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
          position: this.posDeliveryGuy, map: this.maps.map,
          icon: 'assets/images/deliveryman.png'
        });
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
      setTimeout(() => {
        this.moveMarker();
      }, this.delay);
    }
    //  else {
    //   this.requestDirection(this.lastTo);
    // }
  }

  private registerUpdates() {
    const component = this;
    if (this.order.delivery && this.order.delivery.delivery.latitude && this.order.delivery.delivery.longitude) {
      firebase.database().ref("deliveries").child(String(this.order.delivery.delivery.id)).child("location").on('child_changed', function (data) {
        var fireLocation = data.val() as { latitude: string, longitude: string };
        console.log(fireLocation);
        if (fireLocation.latitude != null && fireLocation.longitude != null) component.onNewLocation(new google.maps.LatLng(Number(fireLocation.latitude), Number(fireLocation.longitude)));
      });
    }
  }

  toggleFab() {
    this.fabAction = !this.fabAction;
  }

  navChat(role: string) {
    let chat = new Chat();
    chat.chatId = role == "vendor" ? (this.order.vendor.user_id + Constants.ROLE_VENDOR) : (this.order.delivery.delivery.user.id + Constants.ROLE_DELIVERY);
    chat.chatImage = role == "vendor" ? this.order.vendor.image : this.order.delivery.delivery.user.image_url;
    chat.chatName = role == "vendor" ? this.order.vendor.name : this.order.delivery.delivery.user.name;
    chat.chatStatus = role == "vendor" ? Constants.ROLE_VENDOR : Constants.ROLE_DELIVERY;
    chat.myId = this.order.user_id + Constants.ROLE_USER;

    let dialing_number = role == "vendor" ? this.order.vendor.user.mobile_number : this.order.delivery.delivery.user.mobile_number;

    this.modalController.create({ component: ChatPage, componentProps: { chat: chat, dialing_number: dialing_number } }).then((modalElement) => modalElement.present());

  }

  dialDriver() {
    if (this.order && this.order.delivery && this.order.delivery.delivery && this.order.delivery.delivery.user && this.order.delivery.delivery.user.mobile_number) {
      this.callNumber.callNumber(this.order.delivery.delivery.user.mobile_number, false).then(res => console.log('Launched dialer!', res)).catch(err => console.log('Error launching dialer', err));
    } else {
      this.translate.get("phone_unavailable").subscribe(value => this.uiElementService.presentToast(value));
    }
  }

  dialVendor() {
    if (this.order && this.order.vendor && this.order.vendor.user && this.order.vendor.user.mobile_number) {
      this.callNumber.callNumber(this.order.vendor.user.mobile_number, false).then(res => console.log('Launched dialer!', res)).catch(err => console.log('Error launching dialer', err));
    } else {
      this.translate.get("phone_unavailable").subscribe(value => this.uiElementService.presentToast(value));
    }
  }

}

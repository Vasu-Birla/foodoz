import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { GoogleMapsService } from '../services/network/google-maps.service';
import createHTMLMapMarker from '../../assets/scripts/html-map-marker.js';
import { Helper } from 'src/models/helper.models';
import { Vendor } from 'src/models/vendor.models';
import { ItemsPage } from '../items/items.page';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.page.html',
  styleUrls: ['./map-view.page.scss']
})
export class MapViewPage implements OnInit {
  @ViewChild("pleaseConnect", { static: true }) pleaseConnect: ElementRef;
  @ViewChild("map", { static: true }) mapElement: ElementRef;
  vendors = new Array<Vendor>();
  currency_icon: string;
  private initialized = false;

  constructor(private router: Router, private navCtrl: NavController, private maps: GoogleMapsService) {

  }

  ngOnInit() {
    this.currency_icon = Helper.getSetting("currency_icon");
    console.log("getCurrentNavigation", this.router.getCurrentNavigation().extras.state);
    if (this.router.getCurrentNavigation().extras.state) {
      this.vendors = this.router.getCurrentNavigation().extras.state.vendors;
    }
  }

  ionViewDidEnter() {
    if (!this.initialized) {
      let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement, null).then(() => {
        this.initialized = true;
        this.plotMarkers();
      }).catch(err => { console.log("maps.init", err); this.close() });
      mapLoaded.catch(err => { console.log("mapLoaded", err); this.close() });
    }
  }

  private close() {
    this.navCtrl.pop();
  }

  private plotMarkers() {
    let posBonds = new google.maps.LatLngBounds();
    for (let vendor of this.vendors) {
      let posDoc = new google.maps.LatLng(Number(vendor.latitude), Number(vendor.longitude));
      let markerDoc = createHTMLMapMarker({
        latlng: posDoc,
        map: this.maps.map,
        html: '<div id="doctor_map"><img src="' + vendor.image + '"></div>'
      });
      posBonds.extend(posDoc);
    }
    setTimeout(() => this.maps.map.fitBounds(posBonds), 1000);
  }

  navVenDetail(vendor: Vendor) {
    this.navCtrl.navigateForward(['./items'], ItemsPage.getStateExtras(vendor));
  }

}

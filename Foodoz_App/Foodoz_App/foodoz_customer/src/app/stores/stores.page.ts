

// ionViewWillEnter() {
//   this.selectedLocation = Helper.getAddressSelected();
//   this.translate.get("loading").subscribe(value => {
//     this.uiElementService.presentLoading(value);
//     if (this.category && this.selectedLocation) this.loadVendorsCategory();
//     if (this.vendorType && this.selectedLocation) this.loadVendorsType();
//   });
// }

import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../services/network/api.service';
import { Category } from 'src/models/category.models';
import { Subscription } from 'rxjs';
import { Helper } from 'src/models/helper.models';
import { MyAddress } from 'src/models/address.models';
import { Vendor } from 'src/models/vendor.models';
import { ItemsPage } from '../items/items.page';
import { Router } from '@angular/router';
import { BaseListResponse } from 'src/models/base-list.models';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss']
})
export class StoresPage implements OnInit, OnDestroy {
  private listFor: string;
  private subscriptions = new Array<Subscription>();
  private infiniteScrollEvent;
  private nextUrl: string;
  private selectedLocation: MyAddress;
  private urlParams: URLSearchParams;
  pageHeading: string;
  vendors = new Array<Vendor>();
  isLoading = true;

  constructor(private router: Router, private navCtrl: NavController, private apiService: ApiService) { }

  ngOnInit() {
    this.selectedLocation = Helper.getAddressSelected();
    this.listFor = this.router.getCurrentNavigation().extras.state.list_for;
    let category: Category = this.router.getCurrentNavigation().extras.state.category;
    let vendorType: { name: string; title: string; } = this.router.getCurrentNavigation().extras.state.vendor_type;

    if (this.selectedLocation && this.listFor) {
      switch (this.listFor) {
        case "vendor_type":
          this.urlParams = new URLSearchParams();
          this.urlParams.append("sort", String(vendorType.name));
          this.urlParams.append("lat", String(this.selectedLocation.latitude));
          this.urlParams.append("long", String(this.selectedLocation.longitude));
          this.pageHeading = vendorType.title;
          break;
        case "category":
          this.urlParams = new URLSearchParams();
          this.urlParams.append("category", String(category.id));
          this.urlParams.append("lat", String(this.selectedLocation.latitude));
          this.urlParams.append("long", String(this.selectedLocation.longitude));
          this.pageHeading = category.title;
          break;
        case "table_booking":
          this.urlParams = new URLSearchParams();
          this.urlParams.append("meta[table_booking]", "true");
          this.urlParams.append("lat", String(this.selectedLocation.latitude));
          this.urlParams.append("long", String(this.selectedLocation.longitude));
          this.pageHeading = "table_booking";
          break;
      }
      this.isLoading = this.urlParams != null;
      if (this.urlParams) this.subscriptions.push(this.apiService.getVendors(this.urlParams).subscribe(res => this.handleRes(res), err => this.handleErr(err)));
    } else {
      this.isLoading = false;
    }
    if (!this.pageHeading) this.pageHeading = "restaurants";
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
  }

  private handleRes(res) {
    let locale = Helper.getLocale();
    if (res && res.data && res.data.length) for (let pro of res.data) this.apiService.setupVendor(pro, this.selectedLocation, locale);

    this.vendors = this.vendors.concat(res.data);
    this.nextUrl = res.links.next;
    if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
    this.isLoading = false;
  }

  private handleErr(err) {
    console.log("getVendors", err);
    this.isLoading = false;
    if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
  }

  doInfiniteVendors(event) {
    if (this.nextUrl == null) {
      event.target.complete();
    } else {
      this.infiniteScrollEvent = event;
      this.subscriptions.push(this.apiService.getURL(this.nextUrl, this.urlParams).subscribe(res => this.handleRes(res), err => this.handleErr(err)));
    }
  }

  navVenDetail(vend) {
    this.navCtrl.navigateForward(['./items'], ItemsPage.getStateExtras(vend, this.listFor == "table_booking"));
  }

}

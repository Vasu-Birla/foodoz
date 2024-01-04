import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyAddress } from 'src/models/address.models';
import { NavController, ViewDidEnter, ViewWillEnter } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { NavigationExtras, Router } from '@angular/router';
import { Helper } from 'src/models/helper.models';
import { MyEventsService } from '../services/events/my-events.service';
import { ECommerceService } from '../services/common/ecommerce.service';
import { APP_CONFIG, AppConfig } from '../app.config';

@Component({
  selector: 'app-saved-addresses',
  templateUrl: './saved-addresses.page.html',
  styleUrls: ['./saved-addresses.page.scss']
})
export class SavedAddressesPage implements OnInit, ViewWillEnter, OnDestroy {
  private subscriptions = new Array<Subscription>();
  addresses = new Array<MyAddress>();
  isLoading = true;
  fabAction = false;
  addressIdSelected = -1;
  pick_location: boolean;
  drop_location: boolean;

  private refreshAddresses = true;

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private navCtrl: NavController, private translate: TranslateService, private router: Router,
    private myEventService: MyEventsService, private uiElementService: UiElementsService, private apiService: ApiService, private eComService: ECommerceService) {
  }

  ngOnInit() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.pick_location = this.router.getCurrentNavigation().extras.state.pick_location;
       this.drop_location = this.router.getCurrentNavigation().extras.state.drop_location;
    }
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  ionViewWillEnter() {
    // this.uiElementService.presentLoading(this.translate.instant("loading"));
    // this.addresses = new Array<MyAddress>();
    // this.addressIdSelected = -1;
    let let_refresh = window.localStorage.getItem("let_refresh");
    if (let_refresh) this.refreshAddresses = true;
    window.localStorage.removeItem("let_refresh");
    if (this.refreshAddresses) this.loadAddresses();
  }

  loadAddresses() {
    // if (!this.addresses || !this.addresses.length)
    // this.uiElementService.presentLoading(this.translate.instant("loading"));
    this.isLoading = true;
    this.subscriptions.push(this.apiService.getAddresses().subscribe(res => {
      this.uiElementService.dismissLoading();
      this.addresses = (res ? res.reverse() : []);
      if (this.config.demoMode) this.checkForDemoLocation();
      this.isLoading = false;
    }, err => {
      console.log("getAddresses", err);
      this.uiElementService.dismissLoading();
      this.isLoading = false;
    }));
  }

  onAddressSelected(event) {
    if (event.detail && event.detail.value) {
      this.addressIdSelected = event.detail.value;
      let addressSelected = this.getSelectedAddress();
      if (addressSelected != null) {
        if (this.pick_location) {
          this.selectAddress(addressSelected);
          this.myEventService.setAddressData(addressSelected);
        } else if (this.drop_location) {
          this.navCtrl.pop();
          this.myEventService.setLocationDrop(addressSelected);
        } else {
          this.refreshAddresses = false;
          let navigationExtras: NavigationExtras = { state: { address: addressSelected, pick_location: false } };
          this.navCtrl.navigateForward(['./set-location'], navigationExtras);
        }
      }
    }
  }

  addressSelected(addressSelected) {
    if (addressSelected != null) {
      if (this.pick_location) {
        this.selectAddress(addressSelected);
        this.myEventService.setAddressData(addressSelected);
      } else if (this.drop_location) {
        this.navCtrl.pop();
        this.myEventService.setLocationDrop(addressSelected);
      } else {
        this.refreshAddresses = false;
        let navigationExtras: NavigationExtras = { state: { address: addressSelected, pick_location: false } };
        this.navCtrl.navigateForward(['./set-location'], navigationExtras);
      }
    }
  }

  navAddressNew() {
    let navigationExtras: NavigationExtras = { state: { pick_location: false } };
    this.navCtrl.navigateForward(['./set-location'], navigationExtras);
  }

  getSelectedAddress(): MyAddress {
    let toReturn = null;
    for (let ad of this.addresses) if (ad.id == this.addressIdSelected) { toReturn = ad; break; }
    return toReturn;
  }

  selectAddress(address: MyAddress) {
    Helper.setAddressSelected(address);
    // this.eComService.setupOrderRequestAddress(address);
    this.navCtrl.pop();
  }

  checkForDemoLocation() {
    let demoAddress = MyAddress.getDemoAddress();
    let exists = false;
    if (this.addresses) {
      for (let addr of this.addresses) {
        if (addr.latitude == demoAddress.latitude && addr.longitude == demoAddress.longitude && addr.formatted_address == demoAddress.formatted_address) {
          exists = true;
          break;
        }
      }
    }
    if (!exists) {
      this.translate.get("just_moment").subscribe(value => {
        this.uiElementService.presentLoading(value);

        let locationDemo = MyAddress.getDemoAddress();
        locationDemo.title = "Office";
        this.subscriptions.push(this.apiService.addressAdd(locationDemo).subscribe(res => {
          this.addresses.unshift(res);
          this.translate.get("demo_location_added").subscribe(value => this.uiElementService.presentToast(value, null, 3000));
          this.uiElementService.dismissLoading();
        }, err => {
          console.log("addressAdd", err);
          this.uiElementService.dismissLoading();
        }));
      });
    }
  }

}

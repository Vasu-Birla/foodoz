import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { MyEventsService } from '../services/events/my-events.service';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { ECommerceService } from '../services/common/ecommerce.service';
import { Subscription } from 'rxjs';
import { MyAddress } from 'src/models/address.models';
import { Helper } from 'src/models/helper.models';
import { Constants } from 'src/models/constants.models';
import { Category } from 'src/models/category.models';
import { Vendor } from 'src/models/vendor.models';
import { ItemsPage } from '../items/items.page';
//import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
  location: string = "home";
  private subscriptions = new Array<Subscription>();
  selectedLocation: MyAddress;
  vendorsArray = new Array<{ vendorType: { name: string; title: string; }; vendors_fir: Array<Vendor>; vendors_sec: Array<Vendor>; }>();
  categories: Array<Category>;
  private banners: Array<Category>;
  bannersToShow: Array<Category>;
  cartCount: number;
  pageNo: number;
  isLoading = true;
  private loadedCount = 0;
  // private allVendorsArray = new Array<Vendor>();
  // public showNearVerndors: boolean = true;
  private vendorTypes = [
    { name: "new", title: "new" },
    { name: "popular", title: "most_popular" },
    { name: "ratings", title: "best_rated" },
    { name: "discounted", title: "discounted_restaurant" }
  ];
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay:true
  };

  constructor(private navCtrl: NavController, private translate: TranslateService, private myEventsService: MyEventsService,
    private uiElementService: UiElementsService,
    private apiService: ApiService, public eComService: ECommerceService,
    //private barcodeScanner: BarcodeScanner
    ) { }

  ngOnInit() {
    this.selectedLocation = Helper.getAddressSelected();
    if (this.selectedLocation && Helper.getLoggedInUser() && this.selectedLocation.id == -1) {
      this.selectedLocation = null;
    }
    this.myEventsService.getAddressObservable().subscribe(selectedLocationNew => {
      let changed: boolean = !this.selectedLocation || !selectedLocationNew ||
        (this.selectedLocation.latitude != selectedLocationNew.latitude || this.selectedLocation.longitude != selectedLocationNew.longitude);
      this.selectedLocation = selectedLocationNew;
      if (changed) {
        this.doRefresh();
      }
    });
    this.doRefresh();
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  private doRefresh() {
    this.isLoading = true;
    this.pageNo = 1;
    this.vendorsArray = [];
    this.banners = [];
    this.loadedCount = 0;
    this.translate.get("loading").subscribe(value => {
      //this.uiElementService.presentLoading(value);
      this.loadCategories();
    });
  }

  pickLocation() {
    this.myEventsService.setCustomEventData("nav:pick_location");
  }

  // scan bar code 
  scanBarcode() {
    // this.translate.get(["bar_scan_msg", "just_moment", "something_wrong"]).subscribe(values => {
    //   const options: BarcodeScannerOptions = {
    //     preferFrontCamera: false,
    //     showFlipCameraButton: false,
    //     showTorchButton: false,
    //     torchOn: false,
    //     prompt: values["bar_scan_msg"],
    //     resultDisplayDuration: 500,
    //     formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
    //     orientation: 'portrait',
    //   };

    //   this.barcodeScanner.scan(options).then(barcodeData => {
    //     console.log('barcodeScanner.scan', barcodeData);
    //     if (barcodeData && barcodeData.text && Number(barcodeData.text)) {
    //       this.uiElementService.presentLoading(values["just_moment"]);
    //       this.subscriptions.push(this.apiService.getVendorsWithId(Number(barcodeData.text), this.selectedLocation).subscribe(res => {
    //         this.uiElementService.dismissLoading();
    //         this.navVenDetail(res);
    //       }, err => {
    //         console.log("getVendorsWithId: ", err);
    //         this.uiElementService.dismissLoading();
    //       }));
    //     }
    //   }).catch(err => {
    //     console.log('Error', err);
    //     this.uiElementService.presentToast(values["something_wrong"]);
    //   });
    // });
  }

  // alertLogin() {
  //   this.translate.get("alert_login_short").subscribe(value => this.uiElementService.presentToast(value));
  //   this.navCtrl.navigateForward(['./phone-number']);
  // }

  loadCategories() {
    this.subscriptions.push(this.apiService.getCategoriesParents().subscribe(res => {
      this.categories = res;
      this.loadedCount = 0;
      if (res && res.length && this.selectedLocation) {
        this.loadBanners();
        this.loadProductsByType();
      } else {
        this.isLoading = false;
        //this.uiElementService.dismissLoading();
      }
    }, err => {
      console.log("getCategoriesParents", err);
      this.isLoading = false;
      //this.uiElementService.dismissLoading();
    }));
  }

  loadProductsByType() {
    let types = [];
    for (let type of this.vendorTypes) types.push(type.name);
    this.subscriptions.push(this.apiService.getVendorsForTypes(this.selectedLocation, types).subscribe(res => {
      console.log("getProductsForTypes", res);
      for (let i = 0; i < this.vendorTypes.length; i++) {
        if (res[i].data && res[i].data.length) {
          var first = [], second = [];
          res[i].data.map((element, index) => {
            if (index % 2 == 0) {
              first.push(element)
            } else {
              second.push(element)
            }
          })
          this.vendorsArray.push({ vendorType: this.vendorTypes[i], vendors_fir: first, vendors_sec: second });
        }
      }
      this.vendorsArray = this.vendorsArray;
      if (!this.haveNothingToShow()) {
        this.bannersToShow = this.banners;
      }
      this.isLoading = false;
      //this.uiElementService.dismissLoading();
    }, err => {
      console.log("getProductsForTypes", err);
      //this.uiElementService.dismissLoading();
      this.isLoading = false;
    }));
  }

  private loadBanners() {
    //if (this.categories && this.categories.length && !this.haveNothingToShow()) this.subscriptions.push(this.apiService.getBanners(Constants.SCOPE_ECOMMERCE).subscribe(res => this.banners = res, err => console.log("getBanners", err)));
    this.subscriptions.push(this.apiService.getBanners(Constants.SCOPE_ECOMMERCE).subscribe(res => this.banners = res, err => console.log("getBanners", err)));
  }

  navVieaMap() {
    // if (this.allVendorsArray && this.allVendorsArray.length) {
    //   let navigationExtras: NavigationExtras = { state: { vendors: this.allVendorsArray } };
    //   this.navCtrl.navigateForward(['./map-view'], navigationExtras);
    // }
  }

  // private checkAndLoadBanners() {
  //   this.loadedCount += 1;
  //   if (this.loadedCount == this.categories.length && !this.haveNothingToShow()) this.subscriptions.push(this.apiService.getBanners(Constants.SCOPE_ECOMMERCE).subscribe(res => this.banners = res, err => console.log("getBanners", err)));
  // }

  haveNothingToShow(): boolean {
    let toReturn = true;
    if (this.vendorsArray) {
      for (let catPros of this.vendorsArray) {
        if (catPros && catPros.vendors_fir.length) {
          toReturn = false;
          break;
        }
      }
    }
    return toReturn;
  }

  seeAllVerndorType(vendorType) {
    if (this.selectedLocation) {
      let navigationExtras: NavigationExtras = { state: { list_for: "vendor_type", vendor_type: vendorType } };
      this.navCtrl.navigateForward(['./stores'], navigationExtras);
    } else {
      this.translate.get("select_location").subscribe(value => this.uiElementService.presentToast(value));
    }
  }

  navStoreDetail(cat: Category) {
    if (this.selectedLocation) {
      let navigationExtras: NavigationExtras = { state: { list_for: "category", category: cat } };
      this.navCtrl.navigateForward(['./stores'], navigationExtras);
    } else {
      this.translate.get("select_location").subscribe(value => this.uiElementService.presentToast(value));
    }
  }

  navVenDetail(vendor: Vendor) {
    this.navCtrl.navigateForward(['./items'], ItemsPage.getStateExtras(vendor));
  }

  offers() {
    this.navCtrl.navigateForward(['./offers']);
  }

  navSearch() {
    if (this.selectedLocation && this.selectedLocation.latitude && this.selectedLocation.longitude) {
      this.navCtrl.navigateForward(['./search-new']);
    } else {
      this.translate.get("select_location").subscribe(value => this.uiElementService.presentToast(value));
    }
  }

  navTableBooking() {
    if (this.selectedLocation && this.selectedLocation.latitude && this.selectedLocation.longitude) {
      let navigationExtras: NavigationExtras = { state: { list_for: "table_booking" } };
      this.navCtrl.navigateForward(['./stores'], navigationExtras);
    } else {
      this.translate.get("select_location").subscribe(value => this.uiElementService.presentToast(value));
    }
  }

}

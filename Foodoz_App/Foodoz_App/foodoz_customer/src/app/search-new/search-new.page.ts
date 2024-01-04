import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Vendor } from 'src/models/vendor.models';
import { AppConfig, APP_CONFIG } from '../app.config';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { CartItem, CartItemAddOn, ECommerceService } from '../services/common/ecommerce.service';
import { Helper } from 'src/models/helper.models';
import { BaseListResponse } from 'src/models/base-list.models';
import { ItemsPage } from '../items/items.page';
import { MyAddress } from 'src/models/address.models';
import { Product } from 'src/models/product.models';
import { VariationSelectionPage } from '../variation-selection/variation-selection.page';
import { VariationSelectionAlertPage } from '../variation-selection-alert/variation-selection-alert.page';
import { Constants } from 'src/models/constants.models';

@Component({
  selector: 'app-search-new',
  templateUrl: './search-new.page.html',
  styleUrls: ['./search-new.page.scss']
})
export class SearchNewPage implements OnInit {
  private subscriptions = new Array<Subscription>();
  vendors = new Array<Vendor>();
  isLoading = false;
  isLoadingVendors = false;
  initialStage = true;
  selectedLocation: MyAddress;
  vendorWithItems = new Array<{ vendor: Vendor, items: Array<Product> }>();
  currency_icon: string;

  segment = 0;
  viewType: string;
  currentValue = 0;
  @ViewChild('slides', { static: true }) slider: IonSlides;

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private navCtrl: NavController, private translate: TranslateService, private alertCtrl: AlertController,
    private uiElementService: UiElementsService, private apiService: ApiService, public eComService: ECommerceService, private modalController: ModalController) { }

  ngOnInit() {
    this.selectedLocation = Helper.getAddressSelected();
    this.currency_icon = Helper.getSetting("currency_icon");
    this.initialStage = true;
    this.isLoading = false;
    this.isLoadingVendors = false;
  }

  ionViewDidEnter() {
    let cartChanged = window.localStorage.getItem(Constants.KEY_CART_CHANGED);
    window.localStorage.removeItem(Constants.KEY_CART_CHANGED);
    if (cartChanged) {
      if (this.vendorWithItems && this.vendorWithItems.length) for (let vi of this.vendorWithItems) for (let item of vi.items) item.quantity = this.eComService.getCartProductQuantity((item.vendor_products && item.vendor_products[0]) ? item.vendor_products[0].id : item.id);
    }
  }

  ionViewWillLeave() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  setValue($event: Event): void {
    this.currentValue = parseInt(($event.target as HTMLInputElement).value, 10);
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  onSearchbarChange(event) {
    let query = "";
    if (event && event.detail && event.detail.value) query = event.detail.value.toLowerCase().trim();
    if (query.length > 1) {
      this.initialStage = false;
      //this.uiElementService.presentLoading(this.translate.instant("searching"));
      this.doProductSearch(query);
      this.doSearch(query);
    }
  }

  doSearch(queryIn) {
    this.isLoadingVendors = true;
    this.vendors = [];
    this.subscriptions.push(this.apiService.getVendorsWithQuery(this.selectedLocation, queryIn, 0).subscribe(res => this.vendorsRes(res), err => this.vendorsErr(err)));
  }

  doProductSearch(queryIn) {
    this.isLoading = true;
    this.vendorWithItems = [];
    this.subscriptions.push(this.apiService.getProductsWithQuery(this.selectedLocation, queryIn, 0).subscribe(res => this.productsRes(res), err => this.productsErr(err)));
  }

  vendorsRes(res: BaseListResponse) {
    this.vendors = this.vendors.concat(res.data);
    this.isLoadingVendors = false;
    //this.uiElementService.dismissLoading();
  }

  vendorsErr(err) {
    console.log("vendorsErr", err);
    this.isLoadingVendors = false;
    //this.uiElementService.dismissLoading();
  }

  productsRes(res: BaseListResponse) {
    if (res && res.data && res.data.length) {
      const vendorId = Array.from(new Set(res.data.map(a => a.vendor_products[0].vendor_id)));
      for (let i = 0; i < vendorId.length; i++) {
        var items = [];
        for (let item of res.data) if (vendorId[i] == item.vendor_products[0].vendor_id) {
          item.quantity = this.eComService.getCartProductQuantity((item.vendor_products && item.vendor_products[0]) ? item.vendor_products[0].id : item.id);
          items.push(item);
        }
        this.vendorWithItems.push({ vendor: items[0].vendor_products[0].vendor, items: items });
      }
    }
    this.vendorWithItems = this.vendorWithItems;
    this.isLoading = false;
    //this.uiElementService.dismissLoading();
    console.log("prodct", this.vendorWithItems);
  }

  productsErr(err) {
    console.log("vendorsErr", err);
    //this.uiElementService.dismissLoading();
    this.isLoading = false;
  }

  navVenDetail(vend) {
    this.navCtrl.navigateForward(['./items'], ItemsPage.getStateExtras(vend));
  }

  alertLogin() {
    this.translate.get("alert_login_short").subscribe(value => this.uiElementService.presentToast(value));
    this.navCtrl.navigateForward(['./phone-number']);
  }

  clearCart() {
    this.translate.get(['clear_cart_message', 'clear_now', 'cancel']).subscribe(text => {
      this.alertCtrl.create({
        message: text['clear_cart_message'],
        buttons: [
          {
            text: text["cancel"],
            handler: () => { },
            role: 'cancel'
          }, {
            text: text['clear_now'],
            handler: () => this.eComService.clearCart()
          }]
      }).then(alert => alert.present());
    });
  }

  addProCart(pro: Product) {
    if (this.eComService.getCartItems().length >= 1 && Number(this.eComService.getCartItems()[0].meta.vendor_id) != pro.vendor_products[0].vendor_id) {
      return this.clearCart();
    }
    if (Helper.getLoggedInUser() != null) {
      let existingCartItems = this.eComService.getCartItemsWithProductId((pro.vendor_products && pro.vendor_products[0]) ? pro.vendor_products[0].id : pro.id);
      if (existingCartItems.length && (existingCartItems.length > 1 || existingCartItems[0].addOns.length)) {
        this.confirmVariationSelectionMode(pro, existingCartItems);
      } else if (pro.addOnChoicesIsMust) {
        this.proceedVariationSelection(pro);
      } else {
        this.eComService.addOrIncrementCartItem(this.eComService.genCartItemFromProduct(pro, []));
        pro.quantity += 1;
      }
    } else {
      this.alertLogin();
    }
  }

  removeItem(pro: Product) {
    if (Helper.getLoggedInUser() != null) {
      let existingCartItems = this.eComService.getCartItemsWithProductId((pro.vendor_products && pro.vendor_products[0]) ? pro.vendor_products[0].id : pro.id);
      if (existingCartItems.length > 1) {
        this.translate.get(['remove_item_title', 'remove_item_msg', 'go_cart', 'cancel']).subscribe(text => {
          this.alertCtrl.create({
            header: text["remove_item_title"],
            message: text['remove_item_msg'],
            buttons: [{
              text: text['cancel'],
              handler: () => { },
              role: 'cancel'
            }, {
              text: text["go_cart"],
              handler: () => this.navCtrl.navigateForward(['./confirm-order'])
            }]
          }).then(alert => alert.present());
        });
      } else {
        this.eComService.removeOrDecrementCartItem(this.eComService.genCartItemFromProduct(pro, existingCartItems.length ? existingCartItems[0].addOns : []));
        pro.quantity = pro.quantity == 0 ? 0 : pro.quantity - 1;
      }
    } else {
      this.alertLogin();
    }
  }

  variationSelection(product: Product) {
    if (Helper.getLoggedInUser() != null) {
      let addOnsAvailable = false;
      if (product.addon_groups) {
        for (let group of product.addon_groups) {
          if (group.addon_choices && group.addon_choices.length) {
            addOnsAvailable = true;
            break;
          }
        }
      }
      if (!addOnsAvailable) {
        this.eComService.removeCartItemWithProductId((product.vendor_products && product.vendor_products[0]) ? product.vendor_products[0].id : product.id);
        this.translate.get("no_cust_avail").subscribe(text => this.uiElementService.presentToast(text));
        return;
      }
      let existingCartItems = this.eComService.getCartItemsWithProductId((product.vendor_products && product.vendor_products[0]) ? product.vendor_products[0].id : product.id);
      if (existingCartItems.length > 1) {
        this.confirmVariationSelectionMode(product, existingCartItems);
      } else {
        this.proceedVariationSelection(product);
      }
    } else {
      this.alertLogin();
    }
  }

  private confirmVariationSelectionMode(product: Product, existingCartsItem: Array<CartItem>) {
    let addOns = [];
    for (let ci of existingCartsItem) addOns = addOns.concat(ci.addOns);
    this.modalController.create({ component: VariationSelectionAlertPage, componentProps: { product: product, add_ons_existing: addOns } }).then((modalElement) => {
      modalElement.onDidDismiss().then(data => {
        if (data && data.data) {
          if (data.data == "repeat") {
            this.eComService.addOrIncrementCartItem(existingCartsItem[existingCartsItem.length - 1]);
            product.quantity = this.eComService.getCartProductQuantity((product.vendor_products && product.vendor_products[0]) ? product.vendor_products[0].id : product.id);
          } else if (data.data == "new") {
            this.proceedVariationSelection(product);
          }
        }
      });
      modalElement.present();
    });
  }

  private proceedVariationSelection(product: Product) {
    this.modalController.create({ component: VariationSelectionPage, componentProps: { product: product, add_ons_existing: [] } }).then((modalElement) => {
      modalElement.onDidDismiss().then(data => {
        if (data && data.data) {
          let ciChoices = [];
          for (let proChoice of data.data) ciChoices.push(new CartItemAddOn(proChoice.id, proChoice.title, proChoice.price, proChoice.priceToShow));
          this.eComService.addOrIncrementCartItem(this.eComService.genCartItemFromProduct(product, ciChoices));
          product.quantity += 1;
        }
      });
      modalElement.present();
    });
  }

  continue() {
    this.navCtrl.navigateForward(['./confirm-order']);
  }
}

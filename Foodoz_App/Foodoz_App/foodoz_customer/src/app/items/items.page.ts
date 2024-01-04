import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, IonSlides, ModalController, NavController } from '@ionic/angular';
import { VariationSelectionPage } from '../variation-selection/variation-selection.page';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { Subscription } from 'rxjs';
import { ECommerceService, CartItem, CartItemAddOn } from '../services/common/ecommerce.service';
import { Product } from 'src/models/product.models';
import { Helper } from 'src/models/helper.models';
import { MyAddress } from 'src/models/address.models';
import { Vendor } from 'src/models/vendor.models';
import { VariationSelectionAlertPage } from '../variation-selection-alert/variation-selection-alert.page';
import { Category } from 'src/models/category.models';
import { TableBookingPage } from '../table-booking/table-booking.page';
import { Constants } from 'src/models/constants.models';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss']
})
export class ItemsPage implements OnInit {
  @ViewChild('slides', { static: true }) slider: IonSlides;
  bookTableOnly = false;
  vendor: Vendor;
  selectedLocation: MyAddress;
  currency_icon: string;
  private allDone = false;
  private subscriptions = new Array<Subscription>();
  private pageNo = 1;
  private activeCatId = -1;
  infiniteScrollEvent: any;
  isLoading = true;
  categoriesMenuItems: Array<{ category: Category; menu_items: Array<Product>; }> = [];
  tabIndexString = "";
  products = new Array<Product>();

  static getStateExtras(vendorIn: Vendor, forTableBooking?: boolean): NavigationExtras {
    let toReturn = new Vendor();
    toReturn.id = vendorIn.id;
    toReturn.is_favourite = vendorIn.is_favourite;
    toReturn.name = vendorIn.name;
    toReturn.categories_text = vendorIn.categories_text;
    toReturn.distance_toshow = vendorIn.distance_toshow;
    toReturn.address = vendorIn.address;
    toReturn.ratings = vendorIn.ratings;
    toReturn.ratings_count = vendorIn.ratings_count;
    toReturn.product_categories = vendorIn.product_categories;
    toReturn.opening_time_toshow = vendorIn.opening_time_toshow;
    toReturn.closing_time_toshow = vendorIn.closing_time_toshow;

    toReturn.meta = {};
    toReturn.meta.opening_time = vendorIn.meta.opening_time;
    toReturn.meta.closing_time = vendorIn.meta.closing_time;
    return { state: { vendor: toReturn, bookTableOnly: forTableBooking ? forTableBooking : false } };
  }


  constructor(private modalController: ModalController, private router: Router, private navCtrl: NavController, private translate: TranslateService,
    private uiElementService: UiElementsService, private apiService: ApiService, public eComService: ECommerceService, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.selectedLocation = Helper.getAddressSelected();
    this.currency_icon = Helper.getSetting("currency_icon");
    if (this.router.getCurrentNavigation().extras.state) {
      this.vendor = this.router.getCurrentNavigation().extras.state.vendor;
      this.bookTableOnly = this.router.getCurrentNavigation().extras.state.bookTableOnly;
      this.loadProducts();
    }
  }

  ionViewDidEnter() {
    let cartChanged = window.localStorage.getItem(Constants.KEY_CART_CHANGED);
    window.localStorage.removeItem(Constants.KEY_CART_CHANGED);
    if (cartChanged) {
      if (this.categoriesMenuItems && this.categoriesMenuItems.length) for (let cmi of this.categoriesMenuItems) for (let item of cmi.menu_items) item.quantity = this.eComService.getCartProductQuantity((item.vendor_products && item.vendor_products[0]) ? item.vendor_products[0].id : item.id);
    }
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  async segmentChanged() {
    let index = -1;
    this.activeCatId = Number(this.tabIndexString.substring(this.tabIndexString.lastIndexOf("_") + 1));
    if (this.activeCatId) {
      this.checkAndLoadMore();
      index = this.getActiveCatIndex();
    }
    if (index != -1) {
      await this.slider.slideTo(index);
    }
  }

  async slideChanged() {
    let activeIndex = await this.slider.getActiveIndex();
    if (activeIndex < this.categoriesMenuItems.length) {
      this.tabIndexString = "segment_index_" + this.categoriesMenuItems[activeIndex].category.id;
      document.getElementById("segment_button_" + this.categoriesMenuItems[activeIndex].category.id).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    }
  }

  private loadProducts() {
    this.subscriptions.push(this.apiService.getVendorProducts(this.vendor.id, this.pageNo).subscribe(res => this.productsRes(res), err => this.productsErr(err)));
  }

  private productsRes(res) {
    this.products = this.products.concat(res.data);
    this.allDone = res.meta.current_page == res.meta.last_page;
    if (!this.categoriesMenuItems || !this.categoriesMenuItems.length) {
      this.categoriesMenuItems = [];
      for (let cat of this.vendor.product_categories) this.categoriesMenuItems.push({ category: cat, menu_items: [] });
    }
    for (let pro of res.data) {
      if (!this.bookTableOnly)
        pro.quantity = this.eComService.getCartProductQuantity((pro.vendor_products && pro.vendor_products[0]) ? pro.vendor_products[0].id : pro.id);
      this.updateOrAddInList(pro);
    }
    this.categoriesMenuItems = this.categoriesMenuItems.sort((cmi1: { category: Category; menu_items: Array<Product>; }, cmi2: { category: Category; menu_items: Array<Product>; }) => {
      return cmi1.menu_items.length < cmi2.menu_items.length ? 1 : (cmi1.menu_items.length > cmi2.menu_items.length ? -1 : 0);
    });
    if (this.categoriesMenuItems.length) {
      setTimeout(() => {
        let nowIndex = 0;
        if (this.tabIndexString.length && this.activeCatId > 0) {
          nowIndex = this.getActiveCatIndex();
          if (nowIndex == -1) nowIndex = 0;
        }
        this.activeCatId = this.categoriesMenuItems[nowIndex].category.id;
        this.tabIndexString = "segment_index_" + this.activeCatId;
        this.slider.slideTo(nowIndex);
        document.getElementById("segment_button_" + this.activeCatId).scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center'
        });
      }, 250);
      this.isLoading = false;
    }
    if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
  }

  private productsErr(err) {
    console.log("productsErr", err);
    if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
    this.isLoading = false;
  }

  private checkAndLoadMore() {
    let index = -1;
    if (this.activeCatId) {
      index = this.getActiveCatIndex();
      if (index != -1 && !this.isLoading && !this.allDone) {
        //6 is approx count of max elements is single sight.
        if (!this.categoriesMenuItems[index].menu_items || this.categoriesMenuItems[index].menu_items.length < 6) {
          this.loadMore();
        }
      }
    }
  }

  private getActiveCatIndex(): number {
    let toReturn = -1;
    for (let i = 0; i < this.categoriesMenuItems.length; i++) {
      if (this.categoriesMenuItems[i].category.id == this.activeCatId) {
        toReturn = i;
        break;
      }
    }
    return toReturn;
  }

  private loadMore() {
    if (!this.isLoading && !this.allDone) {
      this.isLoading = true;
      this.pageNo += 1;
      this.loadProducts();
    }
  }

  doInfiniteProducts(event) {
    this.infiniteScrollEvent = event;
    if (this.allDone) {
      this.infiniteScrollEvent.target.complete();
    } else {
      this.loadMore();
    }
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

  toggleFavorite() {
    if (Helper.getLoggedInUser() != null) {
      this.translate.get("just_moment").subscribe(value => {
        this.uiElementService.presentLoading(value);
        this.subscriptions.push(this.apiService.toggleVendorFavorite(this.vendor.id).subscribe(res => {
          this.vendor.is_favourite = !this.vendor.is_favourite;
          this.uiElementService.dismissLoading();
        }, err => {
          console.log("toggleProductFavorite", err);
          this.uiElementService.dismissLoading();
        }));
      });
    } else {
      this.alertLogin();
    }
  }

  alertLogin() {
    this.translate.get("alert_login_short").subscribe(value => this.uiElementService.presentToast(value));
    this.navCtrl.navigateForward(['./phone-number']);
  }

  navReviews() {
    let navigationExtras: NavigationExtras = { state: { vendor: this.vendor } };
    this.navCtrl.navigateForward(['./reviews'], navigationExtras);
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

  continueNav() {
    if (Helper.getLoggedInUser() != null) {
      if (this.bookTableOnly) {
        this.modalController.create({ component: TableBookingPage, componentProps: { vendor: this.vendor } }).then((modalElement) => {
          modalElement.onDidDismiss().then(data => {
            console.log(data);
            if (data.data == "table_booked") {
              this.navCtrl.navigateRoot(['./table-booked']);
            }
          });
          modalElement.present();
        });
      } else {
        this.navCtrl.navigateForward(['./confirm-order']);
      }
    } else {
      this.alertLogin();
    }


  }

  private clearCart() {
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

  private updateOrAddInList(product: Product) {
    if (this.categoriesMenuItems) {
      for (let catPro of product.categories) {
        let catProExistsAtIndex = -1;
        for (let i = 0; i < this.categoriesMenuItems.length; i++) {
          if (this.categoriesMenuItems[i].category && this.categoriesMenuItems[i].category.id == catPro.id) {
            catProExistsAtIndex = i;
            break;
          }
        }
        if (catProExistsAtIndex == -1) this.categoriesMenuItems.unshift({ category: catPro, menu_items: [] });
        this.updateOrAddInMenuItems(catProExistsAtIndex == -1 ? 0 : catProExistsAtIndex, product);
      }
    }
  }

  private updateOrAddInMenuItems(indexInMenuItems: number, product: Product) {
    let existingIndex = -1;
    for (let i = 0; i < this.categoriesMenuItems[indexInMenuItems].menu_items.length; i++) {
      if (this.categoriesMenuItems[indexInMenuItems].menu_items[i].id == product.id) {
        existingIndex = i;
        break;
      }
    }
    if (existingIndex == -1) {
      this.categoriesMenuItems[indexInMenuItems].menu_items.unshift(product);
    } else {
      this.categoriesMenuItems[indexInMenuItems].menu_items[existingIndex] = product;
    }
  }

  // async logScrolling($event) {
  //   // only send the event once
  //   if (this.scrollDepthTriggered) {
  //     return;
  //   }

  //   const scrollElement = await $event.target.getScrollElement();
  //   console.log({ scrollElement });

  //   // minus clientHeight because trigger is scrollTop
  //   // otherwise you hit the bottom of the page before 
  //   // the top screen can get to 80% total document height
  //   const scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;
  //   console.log({ scrollHeight });

  //   const currentScrollDepth = $event.detail.scrollTop;
  //   console.log({ currentScrollDepth });

  //   const targetPercent = 90;

  //   let triggerDepth = ((scrollHeight / 100) * targetPercent);
  //   console.log({ triggerDepth });

  //   if (currentScrollDepth > triggerDepth) {
  //     console.log(`Scrolled to ${targetPercent}%`);
  //     // this ensures that the event only triggers once
  //     this.scrollDepthTriggered = true;
  //     this.doInfiniteProducts();
  //   }
  // }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { Product } from 'src/models/product.models';
import { Helper } from 'src/models/helper.models';
import { BaseListResponse } from 'src/models/base-list.models';
import { NavigationExtras } from '@angular/router';
import { Category } from 'src/models/category.models';
import { Profile } from 'src/models/profile.models';
import { MyEventsService } from '../services/events/my-events.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss']
})
export class ItemsPage implements OnInit {
  @ViewChild('slides', { static: true }) slider: IonSlides;
  private subscriptions = new Array<Subscription>();
  private profileMe: Profile;
  private updatingStockQuantity = false;

  private pageNo = 1;
  private allDone = false;
  activeCatId = -1;
  infiniteScrollEvent: any;
  isLoading = true;
  categoriesMenuItems: Array<{ category: Category; menu_items: Array<Product>; }> = [];
  tabIndexString = "";
  products = new Array<Product>();

  constructor(private navCtrl: NavController, private translate: TranslateService, private myEvent: MyEventsService,
    private uiElementService: UiElementsService, private apiService: ApiService) { }

  ngOnInit() {
    this.profileMe = Helper.getProfile();
    this.isLoading = true;
    this.loadProducts();
    this.subscriptions.push(this.myEvent.getUpdatePoductObservable().subscribe(res => { this.updateOrAddInList(res); setTimeout(() => this.categoriesMenuItems = this.categoriesMenuItems, 100); }));
  }

  ngOnDestroy() {
    // for (let sub of this.subscriptions) sub.unsubscribe();
    // this.uiElementService.dismissLoading();
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
    this.subscriptions.push(this.apiService.getProducts(this.profileMe.id, this.pageNo).subscribe(res => this.productsRes(res), err => this.productsErr(err)));
  }

  productsRes(res: BaseListResponse) {
    this.products = this.products.concat(res.data);
    this.allDone = res.meta.current_page == res.meta.last_page;
    if (!this.categoriesMenuItems || !this.categoriesMenuItems.length) {
      this.categoriesMenuItems = [];
      for (let cat of this.profileMe.product_categories) this.categoriesMenuItems.push({ category: cat, menu_items: [] });
    }
    for (let pro of res.data) this.updateOrAddInList(pro);
    this.categoriesMenuItems = this.categoriesMenuItems.sort((cmi1: { category: Category; menu_items: Array<Product>; }, cmi2: { category: Category; menu_items: Array<Product>; }) => {
      return cmi1.menu_items.length < cmi2.menu_items.length ? 1 : (cmi1.menu_items.length > cmi2.menu_items.length ? -1 : 0);
    });
    try {
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
      }
    } catch (e) { console.log(e); }
    if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
    this.isLoading = false;
  }

  productsErr(err) {
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

  navItemDetail(product) {
    let navigationExtras: NavigationExtras = { state: { product: product } };
    this.navCtrl.navigateForward(['./edit-product'], navigationExtras);
  }

  changeProQuantity(item) {
    if (!this.updatingStockQuantity) {
      this.updatingStockQuantity = true;
      this.translate.get("just_moment").subscribe(value => {
        this.uiElementService.presentLoading(value);
        let pur = {
          vendor_id: this.profileMe.id,
          stock_quantity: item.stock_quantity_status ? 0 : -1,
        }
        this.subscriptions.push(this.apiService.updateProductStock(item.id, pur).subscribe(res => {
          this.updateOrAddInList(res);
          setTimeout(() => this.categoriesMenuItems = this.categoriesMenuItems, 100);
          this.uiElementService.dismissLoading();
          this.updatingStockQuantity = false;
        }, err => { console.log("updateProductStock: ", err); this.uiElementService.dismissLoading(); this.updatingStockQuantity = false; }));
      });
    }
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

  // private profileCategoriesChanged(oldProfile: Profile, newProfile: Profile): boolean {
  //   if (!newProfile) return false;
  //   if (!oldProfile) return true;
  //   if (newProfile.product_categories.length != oldProfile.product_categories.length) {
  //     return true;
  //   } else {
  //     let catsSet = new Set();
  //     let setLength = "";
  //     oldProfile.product_categories.forEach((value) => catsSet.add(String(value.id) + value.title));
  //     setLength = String(catsSet.size);
  //     newProfile.product_categories.forEach((value) => catsSet.add(String(value.id) + value.title));
  //     return setLength != String(catsSet.size);
  //   }
  // }

}

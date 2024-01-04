import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Product } from 'src/models/product.models';
import { CartItemAddOn } from '../services/common/ecommerce.service';

@Component({
  selector: 'app-variation-selection-alert',
  templateUrl: './variation-selection-alert.page.html',
  styleUrls: ['./variation-selection-alert.page.scss'],
})
export class VariationSelectionAlertPage implements OnInit {
  product: Product;
  addOnsExisting: Array<CartItemAddOn>;

  constructor(private modalController: ModalController, private navParams: NavParams) { }

  ngOnInit() {
    this.product = this.navParams.get('product');
    this.addOnsExisting = this.navParams.get('add_ons_existing');
    console.log("addOnsExisting: ", this.addOnsExisting);
  }

  actionNew() {
    this.modalController.dismiss("new");
  }

  actionOld() {
    this.modalController.dismiss("repeat");
  }

  dismiss() {
    this.modalController.dismiss(null);
  }
}

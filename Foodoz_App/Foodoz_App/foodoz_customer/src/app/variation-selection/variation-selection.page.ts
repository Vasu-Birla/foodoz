import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Product } from 'src/models/product.models';
import { UiElementsService } from '../services/common/ui-elements.service';

@Component({
  selector: 'app-variation-selection',
  templateUrl: './variation-selection.page.html',
  styleUrls: ['./variation-selection.page.scss']
})
export class VariationSelectionPage implements OnInit {
  product: Product;

  constructor(private modalController: ModalController, private navParams: NavParams, private translate: TranslateService,
    private uiElementService: UiElementsService) { }

  ngOnInit() {
    this.product = this.navParams.get('product');
    let add_ons_existing = this.navParams.get('add_ons_existing');
    for (let group of this.product.addon_groups) {
      group.choiceIdSelected = -1;

      if (group.addon_choices) {
        //SET SELECTED TRUE FOR add_ons_existing
        for (let choice of group.addon_choices) {
          choice.selected = false;
          for (let ae of add_ons_existing) {
            if (ae.id == choice.id) {
              choice.selected = true;
              group.choiceIdSelected = choice.id;
              break;
            }
          }
        }
        //CHECK FOR MINIMUM SELECTION
        if (group.min_choices > 0) {
          let selectedCount = 0;
          for (let choice of group.addon_choices) if (choice.selected) selectedCount += 1;
          if (selectedCount < group.min_choices) {
            let checksLeft = group.min_choices - selectedCount;
            for (let choice of group.addon_choices) if (!choice.selected && checksLeft > 0) {
              choice.selected = true;
              group.choiceIdSelected = choice.id;
              checksLeft -= 1;
            }
          }
        }
      }
    }
  }

  dismiss() {
    this.modalController.dismiss(null);
  }

  radioChange(group, event) {
    if (event.detail && event.detail.value) for (let choice of group.addon_choices) choice.selected = choice.id == event.detail.value;
  }

  addChoice() {
    let selectedChoices = [];
    let canProceed = true;
    for (let group of this.product.addon_groups) {
      let groupChoicesSelected = [];
      if (group.addon_choices) for (let choice of group.addon_choices) if (choice.selected) groupChoicesSelected.push(choice);
      if (group.min_choices > groupChoicesSelected.length) {
        this.translate.get("addon_choices_lessthan_err").subscribe(value => this.uiElementService.presentToast(group.title + " " + value + " " + group.min_choices));
        selectedChoices = [];
        canProceed = false;
        break;
      } else if (groupChoicesSelected.length > group.max_choices) {
        this.translate.get("addon_choices_morethan_err").subscribe(value => this.uiElementService.presentToast(group.title + " " + value + " " + group.max_choices));
        selectedChoices = [];
        canProceed = false;
        break;
      } else {
        selectedChoices = selectedChoices.concat(groupChoicesSelected);
      }
    }
    if (canProceed) {
      this.modalController.dismiss(selectedChoices);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CardInfo } from 'src/models/card-info.models';
import { UiElementsService } from '../services/common/ui-elements.service';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.page.html',
  styleUrls: ['./card-info.page.scss']
})
export class CardInfoPage implements OnInit {
  cardInfo: CardInfo;

  constructor(private modalController: ModalController, private translate: TranslateService, private uiElementService: UiElementsService) {
    this.cardInfo = CardInfo.getSavedCard();
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  proceed() {
    if (this.cardInfo.areFieldsFilled()) {
      CardInfo.setSavedCard(this.cardInfo);
      this.modalController.dismiss(this.cardInfo);
    } else {
      this.translate.get("card_info_err").subscribe(value => this.uiElementService.presentToast(value));
    }
  }
}

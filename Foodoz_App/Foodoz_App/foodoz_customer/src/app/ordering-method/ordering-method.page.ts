import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ordering-method',
  templateUrl: './ordering-method.page.html',
  styleUrls: ['./ordering-method.page.scss']
})
export class OrderingMethodPage implements OnInit {
  order_type: string = 'normal';
  reachTimeArray = new Array<{ key: string, value: number }>();
  reachTime: number = 10;

  constructor(private modalController: ModalController) {
    for (let i = 10; i < 60; i = i + 5) this.reachTimeArray.push({ key: (i + " min"), value: i });
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss(null);
  }

  continue() {
    this.modalController.dismiss({ order_type: this.order_type, reach_time: this.reachTime });
  }
}

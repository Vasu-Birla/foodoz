import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-table-booked',
  templateUrl: './table-booked.page.html',
  styleUrls: ['./table-booked.page.scss']
})
export class TableBookedPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tabs() {
    let navigationExtras: NavigationExtras = { state: { initialIndex: 1 } };
    this.navCtrl.navigateRoot(['./tabs/my_orders'], navigationExtras);
  }
}

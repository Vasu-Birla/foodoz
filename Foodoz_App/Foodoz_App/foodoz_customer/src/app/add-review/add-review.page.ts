import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { Subscription } from 'rxjs';
import { RateRequest } from 'src/models/rate-request.models';
import { Helper } from 'src/models/helper.models';
import { Order } from 'src/models/order.models';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.page.html',
  styleUrls: ['./add-review.page.scss']
})
export class AddReviewPage implements OnInit, OnDestroy {
  private subscriptions = new Array<Subscription>();
  private order_id: string;
  order: Order;
  rateRequest = new RateRequest();

  constructor(private router: Router, private navCtrl: NavController, private translate: TranslateService,
    private uiElementService: UiElementsService, private apiService: ApiService) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.order = this.router.getCurrentNavigation().extras.state.order;
      // this.order_id = String(this.router.getCurrentNavigation().extras.state.vendor.id);
      this.rateRequest.rating = 3;
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  setRating(rating) {
    this.rateRequest.rating = rating;
  }

  submitRating() {
    if (!this.rateRequest.review || !this.rateRequest.review.length) {
      this.translate.get("err_review").subscribe(value => this.uiElementService.presentToast(value));
    } else {
      this.translate.get("just_moment").subscribe(value => {
        this.uiElementService.presentLoading(value);
        this.subscriptions.push(this.apiService.postReviewVendor(this.order.vendor.id, this.rateRequest).subscribe(res => {
          Helper.addReviewedVendorId(String(this.order.vendor_id + String(this.order.id)));
          this.uiElementService.dismissLoading();
          this.translate.get("review_done").subscribe(value => this.uiElementService.presentToast(value));
          this.navCtrl.navigateRoot(['/tabs/home']);
        }, err => {
          this.uiElementService.dismissLoading();
          console.log("postReviewProduct", err);
          let found = false;
          if (err && err.error && err.error.errors) {
            if (err.error.errors.review) {
              found = true;
              this.translate.get("err_review_length").subscribe(value => this.uiElementService.presentErrorAlert(value));
            }
          }
          if (!found) this.translate.get("something_went_wrong").subscribe(value => this.uiElementService.presentErrorAlert(value));
          this.navCtrl.pop();

        }));
      });
    }
  }

}
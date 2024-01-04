import { Component, OnInit, Inject } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { APP_CONFIG, AppConfig } from '../app.config';
import { Helper } from 'src/models/helper.models';
import { User } from 'src/models/user.models';
import { MyEventsService } from '../services/events/my-events.service';
import { TranslateService } from '@ngx-translate/core';
import { ECommerceService } from '../services/common/ecommerce.service';
import { UiElementsService } from '../services/common/ui-elements.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ApiService } from '../services/network/api.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Device } from '@ionic-native/device/ngx';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss']
})
export class MyAccountPage implements OnInit {
  userMe: User;
  platformIos = false;
  private subscriptions: Array<Subscription> = [];

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private navCtrl: NavController, private inAppBrowser: InAppBrowser,
    private myEvent: MyEventsService, private translate: TranslateService, private alertCtrl: AlertController,
    private eComService: ECommerceService, private uiElementService: UiElementsService,
    private platform: Platform, private device: Device, private apiService: ApiService) {
    this.platform.ready().then(() => {
      let ver = String(this.device.version);
      let deviceVersion = Number(ver);
      if (!deviceVersion) deviceVersion = Number(ver.substring(0, ver.indexOf(".")));
      console.log("deviceVersion", deviceVersion);
      console.log("platform", this.platform.platforms());
      this.platformIos = (!this.platform.is('android') && deviceVersion >= 13);
    });
  }

  ngOnInit() {
    this.userMe = Helper.getLoggedInUser();
    this.myEvent.getUserMeObservable().subscribe(user => this.userMe = user);
  }

  saved_addresses() {
    if (this.userMe != null) {
      this.navCtrl.navigateForward(['./saved-addresses']);
    } else {
      this.alertLogin();
    }
  }

  terms_conditions() {
    this.navCtrl.navigateForward(['./terms-conditions']);
  }

  support() {
    if (this.userMe != null) {
      this.navCtrl.navigateForward(['./support']);
    } else {
      this.alertLogin();
    }
  }

  wallet() {
    if (this.userMe != null) {
      this.navCtrl.navigateForward(['./wallet']);
    } else {
      this.alertLogin();
    }
  }

  favorites() {
    if (this.userMe != null) {
      this.navCtrl.navigateForward(['./favorites']);
    } else {
      this.alertLogin();
    }
  }

  //about_us() {
  //    this.route.navigate(['./about-us']);
  //  }

  settings() {
    this.navCtrl.navigateForward(['./settings']);
  }

  confirmDelete() {
    this.translate.get(['delete_account', 'delete_account_msg', 'no', 'yes']).subscribe(text => {
      this.alertCtrl.create({
        header: text['delete_account'],
        message: text['delete_account_msg'],
        buttons: [{
          text: text['no'],
          handler: () => console.log('Cancel clicked')
        }, {
          text: text['yes'],
          handler: () => this.handleDeleteAccount()
        }]
      }).then(alert => alert.present());
    });
  }

  logout() {
    this.translate.get(["logout_title", "logout_message", "no", "yes"]).subscribe(values => {
      this.alertCtrl.create({
        header: values["logout_title"],
        message: values["logout_message"],
        buttons: [{
          text: values["no"],
          handler: () => console.log('Cancel clicked')
        }, {
          text: values["yes"],
          handler: () => this.doLogout(),

        }]
      }).then(alert => alert.present());
    });
  }

  login() {
    this.navCtrl.navigateForward(['./phone-number']);
  }

  alertLogin() {
    this.translate.get("alert_login_short").subscribe(value => this.uiElementService.presentToast(value));
    this.navCtrl.navigateForward(['./phone-number']);
  }

  developed_by() {
    this.inAppBrowser.create("https://verbosetechlabs.com/", '_system');
  }

  buyAppAction() {
    this.translate.get("just_moment").subscribe(value => {
      this.uiElementService.presentLoading(value);
      this.apiService.getContactLink().subscribe(res => {
        this.uiElementService.dismissLoading();
        this.inAppBrowser.create((res.link ? res.link : "http://bit.ly/CC2_Hungerz"), "_system");
      }, err => {
        console.log("getContactLink", err);
        this.uiElementService.dismissLoading();
        this.inAppBrowser.create("http://bit.ly/CC2_Hungerz", "_system");
      });
    });
  }

  private doLogout() {
    try {
      (<any>window).FirebasePlugin.signOutUser(function () {
        console.log("User signed out");
      }, function (error) {
        console.error("Failed to sign out user: " + error);
      });
    } catch (e) { console.log("fireSignout", e); }

    try {
      firebase.auth().signOut().then(function () {
        console.log('Signed Out');
      }, function (error) {
        console.error('Sign Out Error', error);
      });
    } catch (e) { console.log("fireSignout", e); }

    this.eComService.clearCart();
    Helper.setLoggedInUserResponse(null);
    this.myEvent.setUserMeData(null);
  }

  private handleDeleteAccount() {
    this.translate.get(['just_moment', 'delete_account_failure', 'delete_account_success']).subscribe(text => {
      this.uiElementService.presentLoading(text['just_moment']);
      this.subscriptions.push(this.apiService.deleteUser().subscribe(res => {
        this.uiElementService.dismissLoading();
        this.uiElementService.presentToast(text['delete_account_success']);
        this.doLogout();
      }, err => {
        this.uiElementService.dismissLoading();
        this.uiElementService.presentToast(text['delete_account_failure']);
        console.log('deleteUser', err);
      }))
    });
  }

}

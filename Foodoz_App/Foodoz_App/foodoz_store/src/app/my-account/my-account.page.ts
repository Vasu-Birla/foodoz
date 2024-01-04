import { Component, OnInit, Inject } from '@angular/core';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { APP_CONFIG, AppConfig } from '../app.config';
import { TranslateService } from '@ngx-translate/core';
import { Helper } from 'src/models/helper.models';
import { MyEventsService } from '../services/events/my-events.service';
import { Profile } from 'src/models/profile.models';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ApiService } from '../services/network/api.service';
import { UiElementsService } from '../services/common/ui-elements.service';
import { Device } from '@ionic-native/device/ngx';
import { Subscription } from 'rxjs/internal/Subscription';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss']
})
export class MyAccountPage implements OnInit {
  profileMe: Profile;
  platformIos = false;
  private subscriptions: Array<Subscription> = [];

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private navCtrl: NavController, private modalController: ModalController,
    private translate: TranslateService, private alertCtrl: AlertController, private myEvent: MyEventsService, private inAppBrowser: InAppBrowser,
    private uiElementService: UiElementsService, private apiService: ApiService,
    private platform: Platform, private device: Device) {
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
  }
  ionViewDidEnter() {
    this.profileMe = Helper.getProfile();
  }

  store_profile() {
    this.navCtrl.navigateForward(['./store-profile']);
  }
  insight() {
    this.navCtrl.navigateForward(['./insight']);
  }
  wallet() {
    this.navCtrl.navigateForward(['./wallet']);
  }
  terms_conditions() {
    this.navCtrl.navigateForward(['./terms-conditions']);
  }
  support() {
    this.navCtrl.navigateForward(['./support']);
  }
  reviews() {
    this.navCtrl.navigateForward(['./reviews']);
  }
  authentication() {
    this.navCtrl.navigateForward(['./authentication']);
  }
  settings() {
    this.navCtrl.navigateForward(['./settings']);
  }
  //about_us() {
  //    this.navCtrl.navigateForward(['./about-us']);
  //  }
  //select_language() {
  //    this.navCtrl.navigateForward(['./select-language']);
  //  }
  phone_number() {
    this.navCtrl.navigateForward(['./phone-number']);
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
  developed_by() {
    this.inAppBrowser.create("https://verbosetechlabs.com/", '_system');
  }
  // buyappalert() {
  //   this.modalController.create({ component: BuyappalertPage }).then((modalElement) => modalElement.present())
  // }
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
    Helper.setLoggedInUserResponse(null);
    this.myEvent.setLoginData(null);
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

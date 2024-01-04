import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Platform, NavController, IonRouterOutlet, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/models/constants.models';
import { APP_CONFIG, AppConfig, FireConfig } from './app.config';
import { MyEventsService } from './services/events/my-events.service';
import { Helper } from 'src/models/helper.models';
import { ApiService } from './services/network/api.service';
import { ECommerceService } from './services/common/ecommerce.service';
import { User } from 'src/models/user.models';
import { Device } from '@ionic-native/device/ngx';
import { VtPopupPage } from './vt-popup/vt-popup.page';
import { MyAddress } from 'src/models/address.models';
import OneSignal from 'onesignal-cordova-plugin';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(IonRouterOutlet, { static: false }) routerOutlets: IonRouterOutlet;
  rtlSide = "left";
  userMe: User;

  constructor(@Inject(APP_CONFIG) public config: AppConfig,
    private platform: Platform, private apiService: ApiService,
    private splashScreen: SplashScreen, private modalController: ModalController,
    private statusBar: StatusBar, private eComService: ECommerceService,
    private translate: TranslateService, private device: Device,
    private navCtrl: NavController, private myEvent: MyEventsService) { }

  ngOnInit() {
    if (this.config.demoMode && !Helper.getAddressSelected()) Helper.setAddressSelected(MyAddress.getDemoAddress());

    this.initializeApp();
    this.myEvent.getLanguageObservable().subscribe(value => {
      this.apiService.setupHeaders();
      this.navCtrl.navigateRoot(['./']);
      this.globalize(value);
    });
    this.myEvent.getUserMeObservable().subscribe(user => {
      this.refreshSettings();
      this.userMe = user;
      this.apiService.setUserMe(user);
      if (this.userMe == null) this.apiService.setupHeaders(null);
      this.navCtrl.navigateRoot(['./']);
      if (this.platform.is('cordova') && this.userMe) this.updatePlayerId();
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: VtPopupPage,
    });
    return await modal.present();
  }

  initializeApp() {
    if (this.config.demoMode && this.platform.is('cordova') && !window.localStorage.getItem(Constants.KEY_IS_DEMO_MODE)) {
      window.localStorage.setItem(Constants.KEY_IS_DEMO_MODE, "true");
      this.language();
      setTimeout(() => this.presentModal(), 30000);
    } else {
      this.navCtrl.navigateRoot(['./']);
    }
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();

      firebase.initializeApp({
        apiKey: this.config.firebaseConfig.apiKey,
        authDomain: this.config.firebaseConfig.authDomain,
        databaseURL: this.config.firebaseConfig.databaseURL,
        projectId: this.config.firebaseConfig.projectId,
        storageBucket: this.config.firebaseConfig.storageBucket,
        messagingSenderId: this.config.firebaseConfig.messagingSenderId
      });
      if (this.platform.is('cordova')) this.initOneSignal();

      this.apiService.setUuidAndPlatform(this.device.uuid, this.device.platform);
      this.refreshSettings();
      this.setupFireConfig();

      this.apiService.setUserMe(Helper.getLoggedInUser());
      this.userMe = Helper.getLoggedInUser();

      setTimeout(() => {
        this.splashScreen.hide();
        if (this.platform.is('cordova') && this.userMe) this.updatePlayerId();
      }, 3000);

      this.globalize(Helper.getLanguageDefault());
      this.darkModeSetting();

      this.platform.backButton.subscribe(() => {
        if (this.routerOutlets && this.routerOutlets.canGoBack()) {
          this.routerOutlets.pop();
        } else {
          let currPathName = window.location.pathname;
          if (currPathName && currPathName.includes("tabs")) {
            navigator['app'].exitApp();
          } else {
            this.navCtrl.navigateRoot(['./tabs']);
          }
        }
      });
    });
  }

  globalize(languagePriority) {
    this.translate.setDefaultLang("en");
    let defaultLangCode = this.config.availableLanguages[0].code;
    this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    Helper.setLocale(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    Helper.setLanguageDefault(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
  }

  darkModeSetting() {
    document.body.setAttribute('class', (Helper.getThemeMode(this.config.defaultThemeMode) == Constants.THEME_MODE_DARK ? 'dark-theme' : 'light-theme'));
  }

  setDirectionAccordingly(lang: string) {
    switch (lang) {
      case 'ar': {
        this.rtlSide = "rtl";
        break;
      }
      default: {
        this.rtlSide = "ltr";
        break;
      }
    }
  }

  initOneSignal() {
    if (this.config.oneSignalAppId && this.config.oneSignalAppId.length && this.config.oneSignalGPSenderId && this.config.oneSignalGPSenderId.length) {
      OneSignal.setAppId(this.config.oneSignalAppId);
      OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
        console.log("User accepted notifications: " + accepted);
      });
      OneSignal.setNotificationOpenedHandler(function (data) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(data));
      });
      // this.oneSignal.startInit(this.config.oneSignalAppId, this.config.oneSignalGPSenderId);
      // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
      // this.oneSignal.handleNotificationReceived().subscribe((data) => {
      //   console.log(data);
      //   Helper.saveNotification((data.payload.additionalData && data.payload.additionalData.title) ? data.payload.additionalData.title : data.payload.title,
      //     (data.payload.additionalData && data.payload.additionalData.body) ? data.payload.additionalData.body : data.payload.body,
      //     String(new Date().getTime()));
      //   let noti_ids_processed: Array<string> = JSON.parse(window.localStorage.getItem("noti_ids_processed"));
      //   if (!noti_ids_processed) noti_ids_processed = new Array<string>();
      //   noti_ids_processed.push(data.payload.notificationID);
      //   window.localStorage.setItem("noti_ids_processed", JSON.stringify(noti_ids_processed));
      // });
      // this.oneSignal.handleNotificationOpened().subscribe((data) => {
      //   let noti_ids_processed: Array<string> = JSON.parse(window.localStorage.getItem("noti_ids_processed"));
      //   if (!noti_ids_processed) noti_ids_processed = new Array<string>();
      //   let index = noti_ids_processed.indexOf(data.notification.payload.notificationID);
      //   if (index == -1) {
      //     Helper.saveNotification((data.notification.payload.additionalData && data.notification.payload.additionalData.title) ? data.notification.payload.additionalData.title : data.notification.payload.title,
      //       (data.notification.payload.additionalData && data.notification.payload.additionalData.body) ? data.notification.payload.additionalData.body : data.notification.payload.body,
      //       String(new Date().getTime()));
      //   } else {
      //     noti_ids_processed.splice(index, 1);
      //     window.localStorage.setItem("noti_ids_processed", JSON.stringify(noti_ids_processed));
      //   }
      // });
      // this.oneSignal.endInit();
    }
  }

  updatePlayerId() {
    const component = this;
    OneSignal.getDeviceState(function (response) {
      if (response && response.userId) {
        let defaultLang = Helper.getLanguageDefault();

        component.apiService.updateUser({
          notification: "{\"" + Constants.ROLE_USER + "\":\"" + response.userId + "\"}",
          language: (defaultLang && defaultLang.length) ? defaultLang : component.config.availableLanguages[0].code
        }).subscribe(res => console.log('updateUser', res), err => console.log('updateUser', err));

        firebase.database().ref(Constants.REF_USERS_FCM_IDS).child((component.userMe.id + Constants.ROLE_USER)).set(response.userId);
      }
    });
    // this.oneSignal.getIds().then((id) => {
    //   if (id && id.userId) {
    //     let defaultLang = Helper.getLanguageDefault();

    //     this.apiService.updateUser({
    //       notification: "{\"" + Constants.ROLE_USER + "\":\"" + id.userId + "\"}",
    //       language: (defaultLang && defaultLang.length) ? defaultLang : this.config.availableLanguages[0].code
    //     }).subscribe(res => console.log('updateUser', res), err => console.log('updateUser', err));

    //     firebase.database().ref(Constants.REF_USERS_FCM_IDS).child((this.userMe.id + Constants.ROLE_USER)).set(id.userId);
    //   }
    // });
  }

  refreshSettings() {
    this.apiService.getSettings().subscribe(res => { console.log('getSettings', res); Helper.setSettings(res); this.eComService.initialize(); }, err => console.log('getSettings', err));
  }

  setupFireConfig() {
    const component = this;
    firebase.database().ref(Constants.REF_CONFIG).once('value').then((snapshot) => {
      if (snapshot && snapshot.val()) {
        component.config.fireConfig = snapshot.val() as FireConfig;
      }
    }).catch(err => console.log("firebase.database: ", err));
  }

  language() {
    this.navCtrl.navigateForward(['./settings']);
  }
}

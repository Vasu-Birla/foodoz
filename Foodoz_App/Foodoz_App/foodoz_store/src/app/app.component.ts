import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Platform, NavController, IonRouterOutlet, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG, AppConfig } from './app.config';
import { Constants } from 'src/models/constants.models';
import { Helper } from 'src/models/helper.models';
import { ApiService } from './services/network/api.service';
import { MyEventsService } from './services/events/my-events.service';
import { UiElementsService } from './services/common/ui-elements.service';
import { NavigationExtras } from '@angular/router';
import { Profile } from 'src/models/profile.models';
import { Device } from '@ionic-native/device/ngx';
import { VtPopupPage } from './vt-popup/vt-popup.page';
import { Router } from '@angular/router';
import OneSignal from 'onesignal-cordova-plugin';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(IonRouterOutlet, { static: false }) routerOutlets: IonRouterOutlet;
  rtlSide = "ltr";
  rtlSideMenu = "start";
  profileMe: Profile;
  appPagesToUse = [];
  showSideMenu = false;

  private splashWaited = false;
  private profileRefreshed = false;

  constructor(@Inject(APP_CONFIG) public config: AppConfig,
    private platform: Platform, private navCtrl: NavController, private modalController: ModalController, private route: Router,
    private splashScreen: SplashScreen, private apiService: ApiService, private uiElementService: UiElementsService,
    private statusBar: StatusBar, private device: Device,
    private translate: TranslateService, private myEvent: MyEventsService) { }

  ngOnInit() {
    this.initializeApp();
    this.myEvent.getLanguageObservable().subscribe(value => {
      console.log("getLanguageObservable", value);
      this.globalize(value);
      this.apiService.updateUser({ language: value }).subscribe(res => console.log('updateUser', res), err => console.log('updateUser', err));
      this.apiService.setupHeaders();
      this.navCtrl.navigateRoot([this.profileMe ? './tabs' : './phone-number']);
    });
    this.myEvent.getLoginObservable().subscribe(loginRes => {
      if (loginRes == null) {
        this.profileMe = null;
        Helper.setProfile(null);
        this.navCtrl.navigateRoot([this.profileMe ? './tabs' : './phone-number']);
      } else if (loginRes && loginRes.token && loginRes.user) {
        this.translate.get(["verifying_profile", "something_wrong"]).subscribe(values => {
          this.uiElementService.presentLoading(values["verifying_profile"]);
          this.apiService.setupHeaders(loginRes.token);
          this.apiService.getProfile().subscribe(resProfile => {
            if (resProfile && resProfile.user && resProfile.name && resProfile.name.length) {
              Helper.setLoggedInUserResponse(loginRes);
              this.myEvent.setProfileData(resProfile);
              this.navCtrl.navigateRoot(['./tabs']);
            } else {
              this.translate.get("profile_incomplete").subscribe(res => this.uiElementService.presentToast(res, "bottom", 3000));
              let navigationExtras: NavigationExtras = { state: { fresh_profile: true, login_res: loginRes } };
              this.navCtrl.navigateForward(['./store-profile'], navigationExtras);
            }
            this.uiElementService.dismissLoading();
          }, err => {
            console.log("getProfile", err);
            this.apiService.setupHeaders(null);
            this.uiElementService.dismissLoading();
          });
        });
      } else {
        this.profileMe = null;
        this.navCtrl.navigateRoot(['./phone-number']);
      }
    });
    this.myEvent.getProfileObservable().subscribe(profile => {
      Helper.setProfile(profile);
      this.profileMe = profile;
      this.navCtrl.navigateRoot([this.profileMe ? './tabs' : './phone-number']);
      if (this.platform.is('cordova') && this.profileMe) this.updatePlayerId();
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: VtPopupPage,
    });
    return await modal.present();
  }

  initializeApp() {
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

      this.globalize(Helper.getLanguageDefault());
      if (this.platform.is('cordova')) this.initOneSignal();
      this.apiService.setUuidAndPlatform(this.device.uuid, this.device.platform);
      this.refreshProfile();
      this.refreshSettings();

      setTimeout(() => {
        this.splashWaited = true;
        this.navToAppropriatePage();

        this.platform.backButton.subscribe(() => {
          if (this.routerOutlets && this.routerOutlets.canGoBack()) {
            this.routerOutlets.pop();
          } else {
            let currPathName = window.location.pathname;
            if (currPathName && currPathName.includes(this.appPagesToUse[0].url)) {
              navigator['app'].exitApp();
            } else {
              this.navCtrl.navigateRoot(['./tabs']);
            }
          }
        });
      }, 2500);

      this.darkModeSetting();
    });
  }

  refreshProfile() {
    this.profileMe = Helper.getProfile();
    this.apiService.getProfile().subscribe(resProfile => {
      if (resProfile && resProfile.user && resProfile.name && resProfile.name.length) {
        Helper.setProfile(resProfile);
        this.profileMe = resProfile;
      } else {
        this.profileMe = null;
        if (Helper.getProfile()) this.translate.get("profile_incomplete").subscribe(res => this.uiElementService.presentToast(res, "bottom", 3000));
        this.doLogout();
      }

      this.profileRefreshed = true;
      this.navToAppropriatePage();
    }, err => {
      console.log("getProfile", err);
      if (err.status && err.status == 401) {
        this.profileMe = null;
        if (Helper.getProfile()) this.translate.get("profile_loggedout").subscribe(res => this.uiElementService.presentToast(res, "bottom", 3000));
        this.doLogout();
      }

      this.profileRefreshed = true;
      this.navToAppropriatePage();
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
  }

  private navToAppropriatePage() {
    if (this.profileRefreshed && this.splashWaited) {
      this.navCtrl.navigateRoot([this.profileMe ? './tabs' : './phone-number']);
      if (this.config.demoMode && this.platform.is('cordova') && !window.localStorage.getItem(Constants.KEY_IS_DEMO_MODE)) {
        this.navCtrl.navigateForward(['./settings']);
        window.localStorage.setItem(Constants.KEY_IS_DEMO_MODE, "true");
        setTimeout(() => this.presentModal(), 30000);
      }
      setTimeout(() => this.splashScreen.hide(), 500);
      if (this.platform.is('cordova') && this.profileMe) this.updatePlayerId();
    }
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
          notification: "{\"" + Constants.ROLE_VENDOR + "\":\"" + response.userId + "\"}",
          language: (defaultLang && defaultLang.length) ? defaultLang : component.config.availableLanguages[0].code
        }).subscribe(res => console.log('updateUser', res), err => console.log('updateUser', err));

        firebase.database().ref(Constants.REF_USERS_FCM_IDS).child((component.profileMe.user.id + Constants.ROLE_VENDOR)).set(response.userId);
      }
    });
    // this.oneSignal.getIds().then((id) => {
    //   if (id && id.userId) {
    //     let defaultLang = Helper.getLanguageDefault();

    //     this.apiService.updateUser({
    //       notification: "{\"" + Constants.ROLE_VENDOR + "\":\"" + id.userId + "\"}",
    //       language: (defaultLang && defaultLang.length) ? defaultLang : this.config.availableLanguages[0].code
    //     }).subscribe(res => console.log('updateUser', res), err => console.log('updateUser', err));

    //     firebase.database().ref(Constants.REF_USERS_FCM_IDS).child((this.profileMe.user.id + Constants.ROLE_VENDOR)).set(id.userId);
    //   }
    // });
  }

  refreshSettings() {
    this.apiService.getSettings().subscribe(res => { console.log('getSettings', res); Helper.setSettings(res); this.apiService.reloadSetting(); }, err => console.log('getSettings', err));
  }

}

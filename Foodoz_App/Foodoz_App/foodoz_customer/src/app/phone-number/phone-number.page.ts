import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { ModalController, AlertController, NavController, Platform } from '@ionic/angular';
import { SelectCountryPage } from '../select-country/select-country.page';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { APP_CONFIG, AppConfig } from '../app.config';
import { MyEventsService } from '../services/events/my-events.service';
import { ApiService } from '../services/network/api.service';
import { Constants } from 'src/models/constants.models';
import { SocialLoginRequest } from 'src/models/sociallogin-request.models';
import { AuthResponse } from 'src/models/auth-response.models';
import { Helper } from 'src/models/helper.models';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Country } from 'src/models/country.models';
import { Device } from '@ionic-native/device/ngx';
declare var facebookConnectPlugin: any;

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.page.html',
  styleUrls: ['./phone-number.page.scss']
})
export class PhoneNumberPage implements OnInit {
  @ViewChild('inputPhone') inputPhone;
  countryCode;
  phoneNumber: string;
  phoneNumberHint: string;
  private phoneNumberFull: string;
  openCounntryModal: boolean = false;
  countries = new Array<Country>();
  private openDemoAlert: boolean;
  platformIos = false;

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private navCtrl: NavController, private myEvent: MyEventsService,
    private uiElementService: UiElementsService, private apiService: ApiService, private translate: TranslateService,
    private modalController: ModalController, private google: GooglePlus, private keyboard: Keyboard, private device: Device,
    private alertCtrl: AlertController, private platform: Platform) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      let ver = String(this.device.version);
      let deviceVersion = Number(ver);
      if (!deviceVersion) deviceVersion = Number(ver.substring(0, ver.indexOf(".")));
      console.log("deviceVersion", deviceVersion);
      console.log("platform", this.platform.platforms());
      this.platformIos = (!this.platform.is('android') && deviceVersion >= 13);
    });
    this.apiService.getCountries().subscribe(res => this.countries = res);
    this.changeHint();
  }

  isSocialAuthEnabled(): boolean {
    return this.config.fireConfig.enableSocialAuthApple || this.config.fireConfig.enableSocialAuthGoogle || this.config.fireConfig.enableSocialAuthFacebook;
  }

  ionViewWillEnter() {
    if (this.config.demoMode && !Helper.getLoggedInUser()) this.openDemoLogin();
    console.log("ionViewWillEnter")
  }

  ionViewWillLeave() {
    // console.log('ionViewWillLeave', this.alertCtrl)
    if (this.openDemoAlert) this.alertCtrl.dismiss();
    // this.alertCtrl.dismiss();
    this.uiElementService.dismissLoading();
  }

  openDemoLogin() {
    this.openDemoAlert = true;
    this.countryCode = this.config.demoLoginCredentials.country;
    setTimeout(() => this.phoneNumber = this.config.demoLoginCredentials.phoneNumber, 500);
    this.translate.get(['demo_login_title', 'demo_login_message', 'okay']).subscribe(text => {
      this.alertCtrl.create({
        header: text['demo_login_title'],
        message: text['demo_login_message'],
        buttons: [{
          text: text['okay'],
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.openDemoAlert = false;
          }
        }]
      }).then(alert => alert.present());
    });
  }

  alertPhone() {
    // this.route.navigate(['./register']);
    if (!this.countryCode) {
      this.translate.get("select_country").subscribe(value => this.uiElementService.presentToast(value));
      this.navSelectCountry();
      return;
    }
    if (!this.phoneNumber || !this.phoneNumber.length) {
      this.uiElementService.presentToast(this.phoneNumberHint);
      return;
    }
    this.translate.get(['alert_phone', 'no', 'yes']).subscribe(text => {
      this.phoneNumberFull = "+" + this.countryCode + Helper.formatPhone(this.phoneNumber);
      this.alertCtrl.create({
        header: this.phoneNumberFull,
        message: text['alert_phone'],
        buttons: [{
          text: text['no'],
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }, {
          text: text['yes'],
          handler: () => {
            this.checkIfExists();
          }
        }]
      }).then(alert => alert.present());
    });
  }

  navSelectCountry() {
    this.openCounntryModal = true;
    this.modalController.create({ component: SelectCountryPage, componentProps: { countries: this.countries, countryCode: this.countryCode } }).then((modalElement) => {
      modalElement.onDidDismiss().then(data => {
        if (data && data.data) {
          this.openCounntryModal = true;
          this.countryCode = data.data;
          setTimeout(() => this.inputPhone.setFocus(), 100);
        } else {
          this.openCounntryModal = false;
        }
        this.changeHint();
      });
      modalElement.present();
    });
  }

  checkForCountryCode() {
    if (!this.countryCode && !this.openCounntryModal) {
      this.keyboard.hide();
      this.navSelectCountry();
    }
  }

  changeHint() {
    this.phoneNumber = "";
    if (this.countryCode) {
      this.translate.get('enter_mobile_number_exluding').subscribe(value => this.phoneNumberHint = (value + " (+" + this.countryCode + ")"));
    } else {
      this.translate.get('enter_mobile_number').subscribe(value => this.phoneNumberHint = value);
    }
  }

  checkIfExists() {
    this.translate.get('just_moment').subscribe(value => {
      this.uiElementService.presentLoading(value);
      this.apiService.checkUser({ mobile_number: this.phoneNumberFull, role: Constants.ROLE_USER }).subscribe(res => {
        this.uiElementService.dismissLoading();

        // let navigationExtras: NavigationExtras = { queryParams: { phoneNumberFull: this.phoneNumberFull } };
        let navigationExtras: NavigationExtras = { queryParams: { phoneNumberFull: this.phoneNumberFull, isDemoNumber: (this.config.demoMode && this.phoneNumber == this.config.demoLoginCredentials.phoneNumber) } };
        this.navCtrl.navigateForward(['./verification'], navigationExtras);
      }, err => {
        console.log(err);
        this.uiElementService.dismissLoading();

        let navigationExtras: NavigationExtras = { queryParams: { code: this.countryCode, phone: this.phoneNumber } };
        this.navCtrl.navigateForward(['./register'], navigationExtras);
      });
    });
  }

  signInFacebook() {
    if (this.config.demoMode) {
      this.uiElementService.presentErrorAlert("Facebook login is not available for demo purpose", "Facebook login");
    } else {
      if (this.platform.is('cordova')) {
        this.translate.get(["logging_facebook", "logging_facebook_err"]).subscribe(values => {
          this.uiElementService.presentLoading(values["logging_facebook"]);
          facebookConnectPlugin.login(["public_profile", 'email'], (response) => {
            console.log("fb_success", JSON.stringify(response));
            let os = this.platform.is('ios') ? 'ios' : 'android';
            this.verifyUser(new SocialLoginRequest(response.authResponse.accessToken, "facebook", os), null);
          }, (error) => {
            console.log("fb_error", error);
            this.uiElementService.presentToast(values["logging_facebook_err"]);
            this.uiElementService.dismissLoading();
          });
        });
      }
      // if (this.platform.is('cordova')) {
      //   this.translate.get(["logging_facebook", "logging_facebook_err"]).subscribe(values => {
      //     this.uiElementService.presentLoading(values["logging_facebook"]);
      //     this.facebook.login(["public_profile", 'email']).then(response => {
      //       console.log("fb_success", JSON.stringify(response));
      //       let os = this.platform.is('ios') ? 'ios' : 'android';
      //       this.verifyUser(new SocialLoginRequest(response.authResponse.accessToken, "facebook", os), null);
      //     }).catch((error) => {
      //       console.log("fb_error", error);
      //       this.uiElementService.presentToast(values["logging_facebook_err"]);
      //       this.uiElementService.dismissLoading();
      //     });
      //   });
      // }
    }
  }

  signInGoogle() {
    if (this.config.demoMode) {
      this.uiElementService.presentErrorAlert("Google login is not available for demo purpose", "Google login");
    } else {
      // let navigationExtras: NavigationExtras = { queryParams: { name: 'Pradeep', email: 'Pradeep@gmail.com' } };
      // this.navCtrl.navigateForward(['./socila-login'], navigationExtras);
      if (this.platform.is('cordova')) {
        this.translate.get(["logging_google", "logging_google_err"]).subscribe(values => {
          this.uiElementService.presentLoading(values["logging_google"]);
          this.google.login({
            'webClientId': this.config.firebaseConfig.webApplicationId,
            'offline': false,
            'scopes': 'profile email'
          }).then(googleCredential => {
            console.log('google_success', JSON.stringify(googleCredential));

            let os = this.platform.is('ios') ? 'ios' : 'android';
            this.verifyUser(new SocialLoginRequest(googleCredential.idToken, "google", os), (googleCredential.displayName && googleCredential.email) ? { name: googleCredential.displayName, email: googleCredential.email } : null);

          }).catch(err => {
            console.log('google_fail', err);
            this.uiElementService.dismissLoading();
            this.uiElementService.presentToast(values["logging_google_err"]);
          });
        });
      }
    }
  }

  signInApple() {
    if (this.config.demoMode) {
      this.uiElementService.presentErrorAlert("Apple login is not available for demo purpose", "Apple login");
    } else {
      this.uiElementService.presentErrorAlert("Apple login is not available for demo purpose", "Apple login");
    }
  }

  private verifyUser(slr: SocialLoginRequest, nameEmail: { name: string, email: string }) {
    this.translate.get('verifying_user').subscribe(value => {
      this.uiElementService.presentToast(value);
      this.apiService.loginSocial(slr).subscribe(res => {
        this.uiElementService.dismissLoading();
        this.loginSocialSuccess(res);
      }, err => {
        this.uiElementService.dismissLoading();
        console.log(err);
        if (err && err.status && err.status == 404) {
          let navigationExtras: NavigationExtras = { queryParams: nameEmail ? nameEmail : { name: err.error.name, email: err.error.email } };
          this.navCtrl.navigateForward(['./socila-login'], navigationExtras);
        } else {
          this.uiElementService.presentToast(err.error.message);
        }
      });
    });
  }

  private loginSocialSuccess(res: AuthResponse) {
    if (res.user.mobile_verified == 1) {
      this.uiElementService.dismissLoading();
      Helper.setLoggedInUserResponse(res);
      this.apiService.setupHeaders(res.token);
      this.myEvent.setUserMeData(res.user);
    } else {
      let navigationExtras: NavigationExtras = { queryParams: { phoneNumberFull: res.user.mobile_number } };
      this.navCtrl.navigateForward(['./verification'], navigationExtras);
    }
  }
}

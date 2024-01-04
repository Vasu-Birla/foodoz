import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController, AlertController, NavController, Platform, ViewDidEnter } from '@ionic/angular';
import { SelectCountryPage } from '../select-country/select-country.page';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { APP_CONFIG, AppConfig } from '../app.config';
import { MyEventsService } from '../services/events/my-events.service';
import { ApiService } from '../services/network/api.service';
import { Constants } from 'src/models/constants.models';
import { Helper } from 'src/models/helper.models';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Country } from 'src/models/country.models';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.page.html',
  styleUrls: ['./phone-number.page.scss'],
})
export class PhoneNumberPage implements OnInit, ViewDidEnter {
  @ViewChild('inputPhone') inputPhone;
  countryCode;
  phoneNumber: string;
  phoneNumberHint: string;
  private phoneNumberFull: string;
  private openCounntryModal: boolean = false;
  private countries = new Array<Country>();
  private openDemoAlert: boolean;

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private navCtrl: NavController, private myEvent: MyEventsService,
    private uiElementService: UiElementsService, private apiService: ApiService, private translate: TranslateService,
    private modalController: ModalController, private keyboard: Keyboard,
    private alertCtrl: AlertController, private platform: Platform) { }

  ngOnInit() {
    this.apiService.getCountries().subscribe(res => this.countries = res);
    // this.changeHint();
  }

  ionViewDidEnter(){
    this.changeHint();
    if (this.config.demoMode && !Helper.getLoggedInUser()) this.openDemoLogin();
  }

  ionViewWillLeave() {
    if (this.openDemoAlert) this.alertCtrl.dismiss();
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
      this.translate.get('enter_phone_number_exluding').subscribe(value => this.phoneNumberHint = (value + " (+" + this.countryCode + ")"));
    } else {
      this.translate.get('enter_phone_number').subscribe(value => this.phoneNumberHint = value);
    }
  }

  checkIfExists() {
    this.translate.get('just_moment').subscribe(value => {
      this.uiElementService.presentLoading(value);
      this.apiService.checkUser({ mobile_number: this.phoneNumberFull, role: Constants.ROLE_DELIVERY }).subscribe(res => {
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
}

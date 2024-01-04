import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { SelectCountryPage } from '../select-country/select-country.page';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { APP_CONFIG, AppConfig } from '../app.config';
import { MyEventsService } from '../services/events/my-events.service';
import { ApiService } from '../services/network/api.service';
import { SignUpRequest } from 'src/models/auth-signup-request.models';
import { Helper } from 'src/models/helper.models';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Country } from 'src/models/country.models';

@Component({
  selector: 'app-socila-login',
  templateUrl: './socila-login.page.html',
  styleUrls: ['./socila-login.page.scss']
})
export class SocilaLoginPage implements OnInit {
  @ViewChild('inputPhone') inputPhone;
  countryCode;
  phoneNumber: string;
  phoneNumberHint: string;
  private phoneNumberFull: string;
  countries = new Array<Country>();
  signUpRequest = new SignUpRequest();
  openCounntryModal: boolean = false;

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private navCtrl: NavController, private myEvent: MyEventsService,
    private uiElementService: UiElementsService, private apiService: ApiService, private translate: TranslateService,
    private modalController: ModalController, private route: ActivatedRoute, private keyboard: Keyboard,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.apiService.getCountries().subscribe(res => this.countries = res);
    this.changeHint();
    this.route.queryParams.subscribe(params => {
      let name = params["name"];
      let email = params["email"];
      if (name && name.length) this.signUpRequest.name = name;
      if (email && email.length) this.signUpRequest.email = email;
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
            this.signUpRequest.password = String(Math.floor(100000 + Math.random() * 900000));
            this.signUpRequest.mobile_number = this.phoneNumberFull;
            this.signUp();
          }
        }]
      }).then(alert => alert.present());
    });
  }

  signUp() {
    this.translate.get('signing_up').subscribe(value => {
      this.uiElementService.presentLoading(value);

      this.apiService.createUser(this.signUpRequest).subscribe(res => {
        this.uiElementService.dismissLoading();

        let navigationExtras: NavigationExtras = { queryParams: { phoneNumberFull: res.user.mobile_number } };
        this.navCtrl.navigateForward(['./verification'], navigationExtras);
      }, err => {
        console.log(err);
        this.uiElementService.dismissLoading();
        let errMsg;
        this.translate.get(['invalid_credentials', 'invalid_credential_email', 'invalid_credential_phone', 'invalid_credential_password']).subscribe(value => {
          errMsg = value['invalid_credentials'];
          if (err && err.error && err.error.errors) {
            if (err.error.errors.email) {
              errMsg = value['invalid_credential_email'];
            } else if (err.error.errors.mobile_number) {
              errMsg = value['invalid_credential_phone'];
            } else if (err.error.errors.password) {
              errMsg = value['invalid_credential_password'];
            }
          }
          this.uiElementService.presentErrorAlert(errMsg);
        });
      });
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

}

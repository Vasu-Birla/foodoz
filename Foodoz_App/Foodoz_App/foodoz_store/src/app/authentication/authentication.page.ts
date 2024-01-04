import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthenticationList, AuthenticationRequest, identifier } from 'src/models/authentication.models';
import { Helper } from 'src/models/helper.models';
import { AppConfig, APP_CONFIG } from '../app.config';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss']
})
export class AuthenticationPage implements OnInit {
  private subscriptions = new Array<Subscription>();
  isLoading = true;
  authenticationForm: FormGroup;
  authenticationRequest = new AuthenticationRequest();

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private formBuilder: FormBuilder, private apiService: ApiService, private uiElementService: UiElementsService,
    private translate: TranslateService, private navCtrl: NavController) {
    this.translate.get("loading").subscribe(value => {
      this.uiElementService.presentLoading(value);
      this.loadAuthentications();
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  loadAuthentications() {
    this.subscriptions.push(this.apiService.getAuthenticationList(Helper.getProfile().id).subscribe(res => {
      if (res && res.length) this.loadAuthenticationForm(true); else this.loadAuthenticationForm(false);
      res.map(res => {
        if (res.type == "kitchen") {
          const control = <FormArray>this.authenticationForm.controls['kitchenArray']; control.push(this.initKitchenForm(res));
        } else if (res.type == "emenu") {
          const control = <FormArray>this.authenticationForm.controls['emenuArray']; control.push(this.initEmenuForm(res));
        } else if (res.type == "desk") {
          const control = <FormArray>this.authenticationForm.controls['deskArray']; control.push(this.initDeskForm(res));
        } else if (res.type == "kiosk") {
          const control = <FormArray>this.authenticationForm.controls['kioskArray']; control.push(this.initKioskForm(res));
        } else if (res.type == "review") {
          const control = <FormArray>this.authenticationForm.controls['reviewArray']; control.push(this.initReviewForm(res));
        }
      })
      this.isLoading = false;
      this.uiElementService.dismissLoading();
    }, err => {
      console.log("getCategoriesParents", err);
      this.loadAuthenticationForm(false)
      this.isLoading = false;
      this.uiElementService.dismissLoading();
    }));
  }

  loadAuthenticationForm(update) {
    this.authenticationForm = this.formBuilder.group({
      kitchenArray: this.formBuilder.array(update ? [] : [this.initKitchenForm()]),
      emenuArray: this.formBuilder.array(update ? [] : [this.initEmenuForm()]),
      deskArray: this.formBuilder.array(update ? [] : [this.initDeskForm()]),
      kioskArray: this.formBuilder.array(update ? [] : [this.initKioskForm()]),
      reviewArray: this.formBuilder.array(update ? [] : [this.initReviewForm()])
    });
  }

  // to init kitchen form
  initKitchenForm(identifiers?: AuthenticationList) {
    return this.formBuilder.group({
      identifier: [identifiers ? identifiers.identifier : '', [Validators.required, Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]],
      type: ['kitchen']
    })
  }
  // to add kitchen form
  addKitchenForm() {
    const control = <FormArray>this.authenticationForm.get('kitchenArray');
    control.push(this.initKitchenForm());
  }
  // to init emenu form
  initEmenuForm(identifiers?: AuthenticationList) {
    return this.formBuilder.group({
      identifier: [identifiers ? identifiers.identifier : '', [Validators.required, Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]],
      type: ['emenu']
    })
  }
  // to add emenu form
  addEmenuForm() {
    const control = <FormArray>this.authenticationForm.get('emenuArray');
    control.push(this.initEmenuForm());
  }
  // to init Desk form
  initDeskForm(identifiers?: AuthenticationList) {
    return this.formBuilder.group({
      identifier: [identifiers ? identifiers.identifier : '', [Validators.required, Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]],
      type: ['desk']
    })
  }
  // to add Desk form
  addDeskForm() {
    const control = <FormArray>this.authenticationForm.get('deskArray');
    control.push(this.initDeskForm());
  }
  // to init kiosk form
  initKioskForm(identifiers?: AuthenticationList) {
    return this.formBuilder.group({
      identifier: [identifiers ? identifiers.identifier : '', [Validators.required, Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]],
      type: ['kiosk']
    })
  }
  // to add kiosk form
  addKioskForm() {
    const control = <FormArray>this.authenticationForm.get('kioskArray');
    control.push(this.initKioskForm());
  }
  // to init review form
  initReviewForm(identifiers?: AuthenticationList) {
    return this.formBuilder.group({
      identifier: [identifiers ? identifiers.identifier : '', [Validators.required, Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]],
      type: ['review']
    })
  }
  // to add review form
  addReviewForm() {
    const control = <FormArray>this.authenticationForm.get('reviewArray');
    control.push(this.initReviewForm());
  }
  // to delete form
  deleteForm(index, control) {
    if (this.config.demoMode) {
      this.uiElementService.presentToast(this.translate.instant("disabled_this_feature_for_demo_perpose"))
    } else {
      control.removeAt(index)
    }
  }

  onSubmitAuthentication() {
    console.log('form', this.authenticationForm)
    if (this.authenticationForm.status == "VALID") {
      let identifiers = new Array<identifier>();
      this.authenticationForm.value.kitchenArray.map(res => {
        identifiers.push(res);
      })
      this.authenticationForm.value.emenuArray.map(res => {
        identifiers.push(res);
      })
      this.authenticationForm.value.deskArray.map(res => {
        identifiers.push(res);
      })
      this.authenticationForm.value.kioskArray.map(res => {
        identifiers.push(res);
      })
      this.authenticationForm.value.reviewArray.map(res => {
        identifiers.push(res);
      })
      this.authenticationRequest.identifiers = identifiers;
      this.authenticationRequest.vendor_id = Helper.getProfile().id;
      this.isLoading = true;
      this.uiElementService.presentLoading(this.translate.instant('loading'));
      this.subscriptions.push(this.apiService.createAuthentication(this.authenticationRequest).subscribe(res => {
        this.isLoading = false;
        this.uiElementService.dismissLoading();
        this.uiElementService.presentToast(this.translate.instant('updated'));
        this.navCtrl.pop();
      }, err => {
        console.log("getCategoriesParents", err);
        this.isLoading = false;
        this.uiElementService.dismissLoading();
      }));
    } else {
      this.uiElementService.presentToast(this.translate.instant('enter_phone_number_valid'));
    }
  }
}

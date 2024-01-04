import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Profile } from 'src/models/profile.models';
import { AuthResponse } from 'src/models/auth-response.models';
import { Subscription } from 'rxjs';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../services/network/api.service';
import { UiElementsService } from '../services/common/ui-elements.service';
import { Helper } from 'src/models/helper.models';
import { FirebaseUploaderService } from '../services/network/firebase-uploader.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { MyAddress } from 'src/models/address.models';
import { MyEventsService } from '../services/events/my-events.service';
import { Category } from 'src/models/category.models';
import { FeedbackMatter } from 'src/models/feedback-matter.models';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-store-profile',
  templateUrl: './store-profile.page.html',
  styleUrls: ['./store-profile.page.scss']
})
export class StoreProfilePage implements OnInit, OnDestroy {
  private authResponse: AuthResponse;
  fresh_profile: boolean;

  profile = new Profile();
  private authRes: AuthResponse;
  private subscriptions = new Array<Subscription>();
  categoriesSelectedStrings = new Array<string>();
  categoriesSelectedStringsFormatted: string;
  categoryStrings = new Array<string>();
  private categories: Array<Category>;
  feedbackMatter: FeedbackMatter;

  openingTime: string;
  closingTime: string;
  greenTimeKey: string;
  yellowTimeKey: string;
  redTimeKey: string;

  constructor(private navCtrl: NavController, private translate: TranslateService, private router: Router, private platform: Platform, private myEvent: MyEventsService,
    private cropService: Crop, private fireUpService: FirebaseUploaderService, private myEvents: MyEventsService,
    public apiService: ApiService, private uiElementService: UiElementsService, private alertCtrl: AlertController, private camera: Camera, private modalController: ModalController) {
    // setTimeout(() => {
    //   this.profile.image_urls = ["https://previews.123rf.com/images/profotokris/profotokris1502/profotokris150200026/36633512-ripe-vegetables-and-fruits-organic-produce-square-composition-.jpg"];
    // }, 2000);
  }

  ngOnInit() {
    this.openingTime = moment().format();
    this.closingTime = moment().format();
    if (this.router.getCurrentNavigation().extras.state) {
      this.fresh_profile = this.router.getCurrentNavigation().extras.state.fresh_profile;
      this.authRes = this.router.getCurrentNavigation().extras.state.login_res;
    }
    this.profile = new Profile();
    this.translate.get(["just_moment", "something_wrong"]).subscribe(values => {
      this.uiElementService.presentLoading(values["just_moment"]);
      this.subscriptions.push(this.apiService.getProfile().subscribe(resProfile => {
        this.profile = resProfile;
        // this.uiElementService.dismissLoading();
        setTimeout(() => this.profile = resProfile, 600);
        if (this.profile.meta.opening_time && Number(this.profile.meta.opening_time)) {
          this.openingTime = moment(Number(this.profile.meta.opening_time)).format();
        }
        if (this.profile.meta.closing_time && Number(this.profile.meta.closing_time)) {
          this.closingTime = moment(Number(this.profile.meta.closing_time)).format();
        }
        this.setupTimesText();
        this.getCategoriesStore();
        this.getFeedbackMatter();
      }, err => {
        console.log("getProfile", err);
        this.uiElementService.dismissLoading();
        this.uiElementService.presentToast(values["something_wrong"], "top");

        Helper.setLoggedInUserResponse(null);
        this.myEvent.setLoginData(null);
      }));
    });
  }

  setupTimesText() {
    this.greenTimeKey = this.apiService.times.find(key => key.value == this.profile.meta.green_time)?.key;
    this.yellowTimeKey = this.apiService.times.find(key => key.value == this.profile.meta.yellow_time)?.key;
    this.redTimeKey = this.apiService.times.find(key => key.value == this.profile.meta.red_time)?.key;
  }

  getFeedbackMatter() {
    this.subscriptions.push(this.apiService.getFeedbackMatter(this.profile.id).subscribe(res => { console.log("res: ", res); this.setupFeedbackMatter(res); }, err => { console.log("err: ", err); this.setupFeedbackMatter(null); }));
  }

  getCategoriesStore() {
    this.subscriptions.push(this.apiService.getCategoriesParents().subscribe(res => {
      this.categories = res;
      for (let cNew of this.categories) {
        this.categoryStrings.push(cNew.title);
        if (this.profile != null) for (let cOld of this.profile.categories) if (cOld.id == cNew.id) { this.categoriesSelectedStrings.push(cNew.title); break; }
      }
      this.setCategoriesText();
      this.uiElementService.dismissLoading();
    }, err => {
      console.log("getCategoriesParents", err);
      this.uiElementService.dismissLoading();
      this.navCtrl.pop();
    }));
  }

  setupFeedbackMatter(fmIn: FeedbackMatter) {
    let defFm = FeedbackMatter.defaultMatter();
    if (!this.feedbackMatter) this.feedbackMatter = fmIn ? fmIn : defFm;
    for (let i = this.feedbackMatter.questions.length; i < 4; i++) this.feedbackMatter.questions.push(defFm.questions[i]);
    for (let i = this.feedbackMatter.options.length; i < 4; i++) this.feedbackMatter.options.push(defFm.options[i]);
  }

  private setCategoriesText() {
    this.categoriesSelectedStringsFormatted = "";
    for (let ct of this.categoriesSelectedStrings) this.categoriesSelectedStringsFormatted += (ct + ", ");
    if (this.categoriesSelectedStringsFormatted.length) this.categoriesSelectedStringsFormatted = this.categoriesSelectedStringsFormatted.substring(0, this.categoriesSelectedStringsFormatted.length - 2);
  }

  onCategoriesChange() {
    this.setCategoriesText();
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  ionViewDidEnter() {
    let newLocation: MyAddress = Helper.getLocationDefault();
    if (newLocation) {
      this.profile.address = newLocation.formatted_address;
      this.profile.latitude = newLocation.latitude;
      this.profile.longitude = newLocation.longitude;
    }
    Helper.setLocationDefault(null);
  }

  pickImage() {
    this.translate.get(["image_pic_header", "image_pic_subheader", "image_pic_camera", "image_pic_gallery"]).subscribe(values => {
      this.alertCtrl.create({
        header: values["image_pic_header"],
        message: values["image_pic_subheader"],
        buttons: [{
          text: values["image_pic_camera"],
          handler: () => {
            this.getImageCamera();
          }
        }, {
          text: values["image_pic_gallery"],
          handler: () => {
            this.getImageGallery();
          }
        }]
      }).then(alert => alert.present());
    });
  }

  getImageGallery() {
    const component = this;
    this.platform.ready().then(() => {
      if (this.platform.is("android")) {
        //{ "mime": "application/pdf" }  // text/plain, image/png, image/jpeg, audio/wav etc
        //(<any>window).fileChooser.open({ "mime": component.uploadType == 1 ? "image/jpeg" : "application/*" }, (uri) => component.resolveUri(uri), (err) => console.log("fileChooser", err)); // with mime filter
        (<any>window).fileChooser.open({ "mime": "image/*" }, (uri) => component.reduceImages(uri), (err) => console.log("fileChooser", err)); // with mime filter
      } else {
        let gpr = { maximumImagesCount: 1, disable_popover: 1 };
        (<any>window).imagePicker.getPictures((results) => {
          if (results && results[0]) component.reduceImages(results[0]);
        }, (err) => {
          console.log("getPictures", JSON.stringify(err));
        }, gpr);
      }

      // if (this.platform.is("cordova")) {
      //   this.imagePicker.getPictures({
      //     maximumImagesCount: 1,
      //   }).then((results) => {
      //     if (results && results[0]) {
      //       if (this.imageType == 1) {
      //         this.reduceImages(results).then(() => console.log('cropped_images'));
      //       } else {
      //         this.uploadImage(results[0]);
      //       }
      //     }
      //   }, (err) => {
      //     console.log("getPictures", JSON.stringify(err));
      //   });
      // }
    });
  }

  reduceImages(selected_pictures: string) {
    // return selected_pictures.reduce((promise: any, item: any) => {
    //   return promise.then((result) => {
    //     return this.cropService.crop(item, { quality: 100 }).then(cropped_image => this.uploadImage(cropped_image));
    //   });
    // }, Promise.resolve());
    // this.cropService.crop(selected_pictures, { quality: 100 }).then(cropped_image => this.uploadImage(cropped_image));
    this.uploadImage(selected_pictures);
  }

  getImageCamera() {
    const options: CameraOptions = {
      quality: 75,
      destinationType: this.platform.is("android") ? this.camera.DestinationType.FILE_URI : this.camera.DestinationType.NATIVE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => this.reduceImages(imageData), (err) => {
      this.translate.get('camera_err').subscribe(value => this.uiElementService.presentToast(value, "top"));
      console.log("getPicture", JSON.stringify(err));
    });
  }

  uploadImage(imageUri) {
    this.translate.get(["uploading_image", "uploading_fail"]).subscribe(values => {
      this.uiElementService.presentLoading(values["uploading_image"]);
      this.fireUpService.resolveUriAndUpload(imageUri).then(res => {
        console.log("resolveUriAndUpload", res);
        this.profile.image_urls = [String(res)];
        this.uiElementService.dismissLoading();
      }, err => {
        console.log("resolveUriAndUpload", err);
        this.uiElementService.dismissLoading();
        this.uiElementService.presentErrorAlert(values["uploading_fail"]);
      });
    });
  }

  navAddAddress() {
    this.navCtrl.navigateForward(['./set-location']);
  }

  onEmenuSelected() {
    if (this.profile.meta.emenu_app && (!Number(this.profile.meta.no_of_tables) || Number(this.profile.meta.no_of_tables) < 1)) this.profile.meta.no_of_tables = 1;
  }

  update() {
    // let questionsFilled = true;
    // if (this.profile.meta.review_app) {
    //   for (let question of this.feedbackMatter.questions) {
    //     if (!question.title || !question.title.length) {
    //       questionsFilled = false;
    //       break;
    //     }
    //   }
    //   if (!questionsFilled) {
    //     this.translate.get("err_field_review_app_quesitons").subscribe(value => this.uiElementService.presentToast(value, "toast-top-center"));
    //     return;
    //   }
    // } else {
    //   questionsFilled = false;
    // }

    if (!this.profile.name || !this.profile.name.length) {
      this.translate.get("err_field_profile_name").subscribe(value => this.uiElementService.presentToast(value, "top"));
    } else if (!this.categoriesSelectedStrings || !this.categoriesSelectedStrings.length) {
      this.translate.get("err_field_product_categories").subscribe(value => this.uiElementService.presentToast(value));
    } else if (!this.profile.latitude || !this.profile.longitude || !this.profile.latitude.length || !this.profile.longitude.length || !this.profile.address || !this.profile.address.length) {
      this.translate.get("err_field_profile_location").subscribe(value => this.uiElementService.presentToast(value, "top"));
    } else {
      let catsSelected = new Array<number>();
      for (let cat of this.categories) if (this.categoriesSelectedStrings.includes(cat.title)) catsSelected.push(cat.id);

      //this.profile.meta.no_of_tables = this.profile.meta.no_of_tables && this.profile.meta.no_of_tables > 0 ? this.profile.meta.no_of_tables : 1;
      this.profile.meta.opening_time = moment(this.openingTime).toDate().getTime().toString();
      this.profile.meta.closing_time = moment(this.closingTime).toDate().getTime().toString();
      // this.profile.meta.green_time = this.apiService.times.find(key => key.key == this.greenTimeKey)?.value;
      // this.profile.meta.yellow_time = this.apiService.times.find(key => key.key == this.yellowTimeKey)?.value;
      // this.profile.meta.red_time = this.apiService.times.find(key => key.key == this.redTimeKey)?.value;

      let pur = {
        name: this.profile.name,
        categories: catsSelected,
        meta: JSON.stringify(this.profile.meta),
        address: this.profile.address,
        longitude: this.profile.longitude,
        latitude: this.profile.latitude,
        image_urls: this.profile.image_urls
      };
      this.translate.get(["updating", "something_wrong"]).subscribe(values => {
        this.uiElementService.presentLoading(values["updating"]);
        this.subscriptions.push(this.apiService.createFeedbackMatter(this.profile.id, FeedbackMatter.getRequest(this.feedbackMatter)).subscribe(res => this.setupFeedbackMatter(res), err => console.log("createFeedbackMatter: ", err)));
        this.subscriptions.push(this.apiService.updateProfile(pur, this.profile.id).subscribe(res => {
          this.uiElementService.dismissLoading();
          if (this.authRes != null) {
            Helper.setLoggedInUserResponse(this.authRes);
          } else {
            Helper.setLoggedInUser(res.user);
          }
          this.myEvents.setProfileData(res);
        }, err => {
          console.log("updateProfile", err);
          this.uiElementService.dismissLoading();
        }));
      });
    }
  }

  showQr() {
    //this.modalController.create({ component: QrCodePage, componentProps: { profileId: String(this.profile.id), profileName: this.profile.name } }).then((modalElement) => modalElement.present());
  }

  exitApp() {
    Helper.setLoggedInUserResponse(null);
    this.myEvent.setProfileData(null);
  }
}

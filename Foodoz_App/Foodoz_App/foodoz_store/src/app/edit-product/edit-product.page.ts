import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { AddonChoices, AddonGroup, Product } from 'src/models/product.models';
import { Category } from 'src/models/category.models';
import { FirebaseUploaderService } from '../services/network/firebase-uploader.service';
import { Subscription } from 'rxjs';
import { ProductRequest } from 'src/models/product-request.models';
import { Helper } from 'src/models/helper.models';
import { MyEventsService } from '../services/events/my-events.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss']
})
export class EditProductPage implements OnInit {
  private subscriptions = new Array<Subscription>();
  product: Product;
  productRequest = new ProductRequest();
  pageTitle: string;
  currency_icon: string;
  productIngredient: Array<{ title: string }> = [];

  categoriesSelectedStrings = new Array<string>();
  categoriesSelectedStringsFormatted: string;
  categoryStrings = new Array<string>();
  private categories: Array<Category>;
  productQuantityStatus = true;
  addOnsEnabled = false;

  addonForm: FormGroup;
  addonGroupStatus: boolean;
  servings_for = "1";
  cooking_time = "1";
  energy = "1";
  uploadType: number;

  constructor(private router: Router, private navCtrl: NavController, private translate: TranslateService, private alertCtrl: AlertController,
    private uiElementService: UiElementsService, private apiService: ApiService, private platform: Platform, private camera: Camera,
    private myEvent: MyEventsService, private cropService: Crop, private fireUpService: FirebaseUploaderService,
    private formbuilder: FormBuilder) {
    //setTimeout(() => this.productRequest.image_urls = ["https://static.toiimg.com/thumb/72279200.cms?width=680&height=512&imgsize=1077894"], 2000);
  }

  ngOnInit() {
    this.currency_icon = Helper.getSetting("currency_icon");
    let profile = Helper.getProfile();
    if (this.router.getCurrentNavigation().extras.state) {
      this.product = this.router.getCurrentNavigation().extras.state.product;
      if (this.product != null) {
        this.addOnsEnabled = (this.product.addon_groups && this.product.addon_groups.length > 0);
        if (this.product.addon_groups && this.product.addon_groups.length) {
          this.updateAddonGroup();
        } else {
          this.addonGroup();
          this.addIngredient();
        }
        this.productRequest = ProductRequest.fromProduct(this.product, profile.id);
        this.productQuantityStatus = this.productRequest.stock_quantity == -1;
        if (this.product && this.product.categories && this.product.categories.length) for (let cat of this.product.categories) { this.productRequest.categories.push(cat.id); this.categoriesSelectedStrings.push(cat.title); }
        this.setCategoriesText();
        if (this.productRequest.meta && this.productRequest.meta.ingredients) {
          let ingres = [];
          for (let ingre of this.product.meta.ingredients) if (ingre && typeof ingre == "string" && ingre.trim().length) ingres.push({ title: ingre.trim() });
          this.productIngredient = ingres;
        }
      } else {
        this.addonGroup();
        this.addIngredient();
      }
    }


    this.productRequest.vendor_id = profile.id;

    this.translate.get(this.product == null ? "create_item" : "edit_item").subscribe(value => this.pageTitle = value);

    this.translate.get("just_moment").subscribe(value => {
      this.uiElementService.presentLoading(value);
      this.subscriptions.push(this.apiService.getCategoriesChild(profile.categories).subscribe(res => {
        for (let cNew of res) this.categoryStrings.push(cNew.title);
        this.categories = res;
        this.uiElementService.dismissLoading();
      }, err => {
        console.log("getCategoriesParents", err);
        this.uiElementService.dismissLoading();
        this.navCtrl.pop();
      }));
    });

  }

  updateAddonGroup() {
    this.addonGroup(true);
    this.product.addon_groups.map((group, index) => {
      const control = <FormArray>this.addonForm.controls['addon_groups']; control.push(this.addonGroupForm(group));
      group.addon_choices.map((choice) => {
        const controlChoice = <FormArray>this.addonForm.get('addon_groups')['controls'][index].get('choices'); controlChoice.push(this.addonChoicesForm(choice));
      })
    })
  }
  addonGroup(update?: boolean) {
    this.addonForm = this.formbuilder.group({ addon_groups: this.formbuilder.array(update ? [] : [this.addonGroupForm()]) });
  }
  addonGroupForm(group?: AddonGroup) {
    return this.formbuilder.group({
      title: [group ? group.title : '', [Validators.required]],
      min_choices: [group ? group.min_choices : '', [Validators.required]],
      max_choices: [group ? group.max_choices : '', [Validators.required, Validators.pattern(/^[1-9]\d{0,7}(?:\.\d{1,4})?$/)]],
      choices: this.formbuilder.array((group ? [] : [this.addonChoicesForm()]))
    });
  }
  addonChoicesForm(choice?: AddonChoices) {
    return this.formbuilder.group({
      title: [choice ? choice.title : '', Validators.required],
      price: [choice ? choice.price : '', [Validators.required, Validators.pattern(/^[1-9]\d{0,7}(?:\.\d{1,4})?$/)]]
    })
  }
  addAddonGroup() {
    if (this.addonForm.controls.addon_groups['controls'].length < 5) {
      const control = <FormArray>this.addonForm.controls['addon_groups'];
      control.push(this.addonGroupForm());
    }
  }
  addAddonChoice(ix) {
    if (this.addonForm.controls.addon_groups['controls'][ix]['controls'].choices['controls'].length < 5) {
      const control = (<FormArray>this.addonForm.controls['addon_groups']).at(ix).get('choices') as FormArray;
      control.push(this.addonChoicesForm());
    }
  }
  deleteAddonGroupForm(index) {
    (<FormArray>this.addonForm.get('addon_groups')).removeAt(index);
  }
  deleteAddonChoiceForm(index, control) {
    control.removeAt(index)
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

  // categoryComparison(c1: Category, c2: Category) {
  //   return c1 && c2 ? c1.id === c2.id : c1 === c2;
  // }

  pickImage() {
    this.uploadType = 1;
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
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetWidth: 512,
      targetHeight: 512
    }
    this.camera.getPicture(options).then((imageData) => this.reduceImages(imageData), (err) => {
      this.translate.get('camera_err').subscribe(value => this.uiElementService.presentToast(value, "top"));
      console.log("getPicture", JSON.stringify(err));
    });
  }

  getVideo() {
    this.uploadType = 2;
    const component = this;
    this.platform.ready().then(() => {
      if (this.platform.is("android")) {
        //{ "mime": "application/pdf" }  // text/plain, image/png, image/jpeg, audio/wav etc
        //(<any>window).fileChooser.open({ "mime": component.uploadType == 1 ? "image/jpeg" : "application/*" }, (uri) => component.resolveUri(uri), (err) => console.log("fileChooser", err)); // with mime filter
        (<any>window).fileChooser.open({ "mime": "video/mp4" }, (uri) => component.uploadImage(uri), (err) => console.log("fileChooser", err)); // with mime filter
      }
    });
  }

  uploadImage(imageUri) {
    this.translate.get(["uploading_image", "uploading_video", "uploading_fail_img", "uploading_fail_video"]).subscribe(values => {
      this.uiElementService.presentLoading(this.uploadType == 1 ? values["uploading_image"] : values["uploading_video"]);
      this.fireUpService.resolveUriAndUpload(imageUri).then(res => {
        // console.log("resolveUriAndUpload", res);
        // this.productRequest.image_urls.push(String(res));
        if (this.uploadType == 1) this.productRequest.image_urls.push(String(res));
        if (this.uploadType == 2) this.productRequest.meta.video_url = String(res);
        this.uiElementService.dismissLoading();
      }, err => {
        console.log("resolveUriAndUpload", err);
        this.uiElementService.dismissLoading();
        this.uiElementService.presentErrorAlert(this.uploadType == 1 ? values["uploading_fail_img"] : values["uploading_fail_video"]);
      });
    });
  }

  confirmRemoveImage(index: number) {
    this.translate.get(["remove_img", "remove_img_desc", "no", "yes"]).subscribe(values => {
      this.alertCtrl.create({
        header: values["remove_img"],
        message: values["remove_img_desc"],
        buttons: [{
          text: values["no"],
          handler: () => { }
        }, {
          text: values["yes"],
          handler: () => {
            this.productRequest.image_urls.splice(index, 1);
          }
        }]
      }).then(alert => alert.present());
    });
  }

  addIngredient() {
    this.productIngredient.push({ title: "" });
  }
  deleteIngredient(index) {
    this.productIngredient.splice(index, 1);
  }

  saveProduct() {
    if (!this.productRequest.title || !this.productRequest.title.length) {
      this.translate.get("err_field_product_title").subscribe(value => this.uiElementService.presentToast(value));
    } else if (!this.categoriesSelectedStrings || !this.categoriesSelectedStrings.length) {
      this.translate.get("err_field_product_categories").subscribe(value => this.uiElementService.presentToast(value));
    } else if (!this.productRequest.detail || !this.productRequest.detail.length) {
      this.translate.get("err_field_product_detail").subscribe(value => this.uiElementService.presentToast(value));
    } else if (!this.productRequest.meta.food_type || !this.productRequest.meta.food_type.length) {
      this.translate.get("err_field_product_food_type").subscribe(value => this.uiElementService.presentToast(value));
    } else if (!this.productRequest.price || Number(this.productRequest.price) < 0) {
      this.translate.get("err_field_product_price").subscribe(value => this.uiElementService.presentToast(value));
    } else {
      if (this.addOnsEnabled) {
        this.addonForm.controls.addon_groups['controls'].map((res) => {
          if (!res.controls.title.valid) {
            this.addonGroupStatus = false;
            this.translate.get("err_field_product_addon_group_title").subscribe(value => this.uiElementService.presentToast(value));
          }
          //  else if (!res.controls.min_choices.valid) {
          //   this.addonGroupStatus = false;
          //   this.translate.get("err_field_minimum_choices").subscribe(value => this.uiElementService.showErrorToastr(value));
          // }
          else if (!res.controls.max_choices.valid) {
            this.addonGroupStatus = false;
            this.translate.get("err_field_maximum_choices").subscribe(value => this.uiElementService.presentToast(value));
          } else if (Number(res.value.max_choices) < Number(res.value.min_choices)) {
            this.addonGroupStatus = false;
            this.translate.get("err_field_maximum_choices_cannot").subscribe(value => this.uiElementService.presentToast(value));
          } else {
            res.controls.choices['controls'].map((element) => {
              if (!element.controls.title.valid) {
                this.addonGroupStatus = false;
                this.translate.get("err_field_choice_name").subscribe(value => this.uiElementService.presentToast(value));
              } else if (!Number(element.controls.price.value)) {
                this.addonGroupStatus = false;
                this.translate.get("err_field_choice_price").subscribe(value => this.uiElementService.presentToast(value));
              } else {
                this.addonGroupStatus = true;
              }
            });
          }
        });
      } else {
        this.addonGroupStatus = true;
      }

      if (this.addonGroupStatus) {
        this.productRequest.categories = [];
        for (let cat of this.categories) if (this.categoriesSelectedStrings.includes(cat.title)) this.productRequest.categories.push(cat.id);

        // let sendAddonGroupReq = [];
        // this.addonForm.value.addon_groups.map(group => {
        //   let choice = []; group.choices.map(res => choice.push({ title_translations: [{ language: Helper.getLanguageDefault(), text: res.title }], price: Number(res.price) }));
        //   sendAddonGroupReq.push({ title_translations: [{ language: Helper.getLanguageDefault(), text: group.title }], min_choices: Number(group.min_choices), max_choices: Number(group.max_choices), choices: choice });
        // });
        // console.log(sendAddonGroupReq);

        this.productRequest.meta.ingredients = [];
        if (this.productIngredient) for (let ingre of this.productIngredient) this.productRequest.meta.ingredients.push(ingre.title.trim());
        this.productRequest.stock_quantity = this.productQuantityStatus ? -1 : 0;

        let pur = {
          title: this.productRequest.title,
          detail: this.productRequest.detail,
          price: this.productRequest.price,
          sale_price: this.productRequest.sale_price <= 0 ? null : this.productRequest.sale_price,
          vendor_id: this.productRequest.vendor_id,
          categories: this.productRequest.categories,
          image_urls: this.productRequest.image_urls,
          stock_quantity: this.productRequest.stock_quantity,
          addon_groups: this.addOnsEnabled ? this.addonForm.value.addon_groups : [],
          meta: JSON.stringify(this.productRequest.meta)
        }
        // console.log("pur: ", pur);
        this.translate.get(["saving"]).subscribe(values => {
          this.uiElementService.presentLoading(values["saving"]);
          this.subscriptions.push((this.product != null && this.product.id != null) ? this.apiService.updateProduct(this.product.id, pur).subscribe(res => this.handleRes(res), err => this.handleErr(err)) : this.apiService.createProduct(pur).subscribe(res => this.handleRes(res), err => this.handleErr(err)));
        });
      }
    }
  }

  handleRes(res) {
    console.log("handleRes", res);
    this.uiElementService.dismissLoading();
    this.navCtrl.pop();
    this.myEvent.setUpdatePoductData(res);
  }

  handleErr(err) {
    console.log("handleErr", err);
    this.translate.get("something_wrong").subscribe(value => this.uiElementService.presentToast(value));
    this.uiElementService.dismissLoading();
    this.navCtrl.pop();
  }

}


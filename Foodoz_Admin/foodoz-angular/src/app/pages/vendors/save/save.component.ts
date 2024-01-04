import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap, map, concatMap } from 'rxjs/operators';
import 'rxjs/add/operator/filter';

import { Vendor } from '../../../@core/models/vendor/vendor';
import { VendorRequest } from '../../../@core/models/vendor/vendor.request';
import { VendorError } from '../../../@core/models/vendor/vendor.error';
import { CoreService } from '../../../@core/service/core.service';
import { ToastStatus } from '../../../@core/service/toast.service';
import { Observable, empty, of } from 'rxjs';
import { VendorClient } from '../../../@core/network/vendor-client.service';
import { FormGroup, FormArray } from '@angular/forms';
import { Category } from '../../../@core/models/category/category';
import { CategoryClient } from '../../../@core/network/category-client.service';
import { User } from '../../../@core/models/user/user';
import { MetaeditorComponent } from '../../../@theme/components/metaeditor/metaeditor.component';

@Component({
  selector: 'save',
  templateUrl: './save.component.html',
})
export class SaveComponent implements OnInit, AfterViewInit, IsEditable {
  @ViewChild(MetaeditorComponent) metaeditorComponent: MetaeditorComponent;

  vendor: Vendor = new Vendor();
  vendorRequest: VendorRequest = new VendorRequest();
  vendorError: VendorError = new VendorError();
  showProgress: boolean = false;
  showProgressButton: boolean = false;
  categories: Array<Category> = [];
  editId = null;

  nameGroupForm: FormGroup;
  taglineGroupForm: FormGroup;
  detailsGroupForm: FormGroup;

  languages = [];

  constructor(private client: VendorClient, public coreService: CoreService, public route: ActivatedRoute,
    public categoryClient: CategoryClient ) {
    this.languages =  coreService.translationService.languages;
  }

  ngOnInit() {
    this.nameGroupForm = this.coreService.translationService.buildFormGroup(null);
    this.taglineGroupForm = this.coreService.translationService.buildFormGroup(null);
    this.detailsGroupForm = this.coreService.translationService.buildFormGroup(null);

    this.getCategories().subscribe();

    this.getEditData();
  }

  ngAfterViewInit() {
  }

  getCategories(): Observable<Array<Category>> {
    return this.categoryClient.all(this.coreService.appConfigService.getConfig().defaultCategoryScope).pipe(
      map(
        (response) => {
          this.categories = response;
          return response;
        },
      ));
  }

  getEditData() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editId = id;
      this.getDataById(id).subscribe();
    }
  }

  getDataById(id: string): Observable<Vendor> {
    this.showProgress = true;
    return this.client.show(id).pipe(
      map((response) => {
        this.showProgress = false;
        this.vendor = response;
        this.nameGroupForm = this.coreService.translationService.buildFormGroup(this.vendor.name_translations);
        this.taglineGroupForm = this.coreService.translationService.buildFormGroup(this.vendor.tagline_translations);
        this.detailsGroupForm = this.coreService.translationService.buildFormGroup(this.vendor.details_translations);
        this.vendorRequest.minimum_order = this.vendor.minimum_order;
        this.vendorRequest.delivery_fee = this.vendor.delivery_fee;
        this.vendorRequest.area = this.vendor.area;
        this.vendorRequest.address = this.vendor.address;
        this.vendorRequest.latitude = this.vendor.latitude;
        this.vendorRequest.longitude = this.vendor.longitude;
        this.vendorRequest.is_verified = this.vendor.is_verified;
        this.vendorRequest.meta = this.vendor.meta;

        let selectedCategories= [];
        for (let i = 0; i < this.vendor.categories.length; i++) {
          selectedCategories.push(this.vendor.categories[i].id);
        }
        this.vendorRequest.categories = selectedCategories;

        return response;
      }
      ))
  }

  saveVendor() {
    this.metaeditorComponent.updatedMetaProperty();
    
    this.showProgressButton = true;

    const formData: FormData = new FormData();
    formData.append('name_translations', this.coreService.translationService.buildRequestParam(this.nameGroupForm));
    formData.append('tagline_translations', this.coreService.translationService.buildRequestParam(this.taglineGroupForm));
    formData.append('details_translations', this.coreService.translationService.buildRequestParam(this.detailsGroupForm));
    formData.append('minimum_order', this.vendorRequest.minimum_order);
    formData.append('delivery_fee', this.vendorRequest.delivery_fee);
    formData.append('area', this.vendorRequest.area);
    formData.append('address', this.vendorRequest.address);
    formData.append('latitude', this.vendorRequest.latitude);
    formData.append('longitude', this.vendorRequest.longitude);
    formData.append('meta', JSON.stringify(this.vendorRequest.meta));
    formData.append('is_verified', String(this.vendorRequest.is_verified));

    for (let i = 0; i < this.vendorRequest.categories.length; i++) {
      formData.append('categories[]', this.vendorRequest.categories[i]);
    }

    if (this.vendorRequest.image) {
      formData.append('image', this.vendorRequest.image);
    }

    // user information
    if(!this.editId) {
      formData.append('email', this.vendorRequest.email);
      formData.append('mobile_number', this.vendorRequest.mobile_number);
      formData.append('password', this.vendorRequest.password);
    }

    let save$ = !this.editId ? this.client.store(formData) : this.client.update(this.editId, formData);

    save$.subscribe(
      res => {
        this.showProgressButton = false;
        this.coreService.toastService.showToast(ToastStatus.SUCCESS, 'Saved', 'Saved successfully!');
        this.back();
      },
      err => {
        this.showProgressButton = false;
        this.coreService.toastService.showToast(ToastStatus.DANGER, 'Failed', err.error.message);
        if (err.error.errors) {
          let errors = err.error.errors;
          this.vendorError.name_translations = errors?.name_translations;
          this.vendorError.tagline_translations = errors?.tagline_translations;
          this.vendorError.details_translations = errors?.details_translations;
          this.vendorError.minimum_order = errors?.minimum_order;
          this.vendorError.delivery_fee = errors?.delivery_fee;
          this.vendorError.area = errors?.area;
          this.vendorError.address = errors?.address;
          this.vendorError.longitude = errors?.longitude;
          this.vendorError.latitude = errors?.latitude;
          this.vendorError.image = errors?.image;
          this.vendorError.is_verified = errors?.is_verified;

          this.vendorError.email = errors?.email;
          this.vendorError.mobile_number = errors?.mobile_number;
          this.vendorError.password = errors?.password;
        }
      },
    );
  }

  back() {
    this.coreService.location.back();
  }

  getNameItems() {
    return this.nameGroupForm.get('items')  as FormArray;
  }

  getTaglineItems() {
    return this.taglineGroupForm.get('items')  as FormArray;
  }

  getDetailsItems() {
    return this.detailsGroupForm.get('items')  as FormArray;
  }

  onImageChanged(event) {
    const file = event.target.files[0];
    this.vendorRequest.image = file;
  }

  onIsVerifiedChange(value) {
    this.vendorRequest.is_verified = value ? 1 : 0;
  }
}

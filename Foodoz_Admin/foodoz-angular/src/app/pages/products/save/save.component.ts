import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap, map, concatMap } from 'rxjs/operators';
import 'rxjs/add/operator/filter';

import { Product } from '../../../@core/models/product/product';
import { ProductRequest } from '../../../@core/models/product/product.request';
import { ProductError } from '../../../@core/models/product/product.error';
import { CoreService } from '../../../@core/service/core.service';
import { ToastStatus } from '../../../@core/service/toast.service';
import { Observable, empty, of, forkJoin } from 'rxjs';
import { ProductClient } from '../../../@core/network/product-client.service';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Category } from '../../../@core/models/category/category';
import { CategoryClient } from '../../../@core/network/category-client.service';
import { VendorClient } from '../../../@core/network/vendor-client.service';
import { Vendor } from '../../../@core/models/vendor/vendor';
import { Addongroup } from '../../../@core/models/product/addongroup';
import { MetaeditorComponent } from '../../../@theme/components/metaeditor/metaeditor.component';

@Component({
  selector: 'save',
  templateUrl: './save.component.html',
})
export class SaveComponent implements OnInit, IsEditable {
  @ViewChild(MetaeditorComponent) metaeditorComponent: MetaeditorComponent;

  product: Product = new Product();
  productRequest: ProductRequest = new ProductRequest();
  productError: ProductError = new ProductError();
  showProgress: boolean = false;
  showProgressButton: boolean = false;
  categories: Array<Category> = [];
  vendors: Array<Vendor> = [];
  editId = null;
  vendorId = null;

  titleGroupForm: FormGroup;
  taglineGroupForm: FormGroup;
  detailGroupForm: FormGroup;

  groupForm: FormGroup;
  groupFormItems: FormArray;

  languages = [];

  constructor(private client: ProductClient, public coreService: CoreService, public route: ActivatedRoute,
    public categoryClient: CategoryClient, public vendorClient: VendorClient, private formBuilder: FormBuilder) {
    this.languages = coreService.translationService.languages;
  }

  ngOnInit() {
    this.titleGroupForm = this.coreService.translationService.buildFormGroup(null);
    this.detailGroupForm = this.coreService.translationService.buildFormGroup(null);

    this.groupForm = this.formBuilder.group({
      items: this.formBuilder.array([]),
    });

    if (!this.editId) {
      this.groupFormItems = this.groupForm.get('items') as FormArray;
    }

    forkJoin([
      this.getCategories(),
      this.getVendors()
    ]).subscribe();

    this.getEditData();

    this.vendorId = this.route.snapshot.queryParamMap.get('vendor');
    this.productRequest.vendor_id = this.vendorId;
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

  getVendors(): Observable<Array<Vendor>> {
    return this.vendorClient.all().pipe(
      map(
        (response) => {
          this.vendors = response;
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

  getDataById(id: string): Observable<Product> {
    this.showProgress = true;
    return this.client.show(id).pipe(
      map((response) => {
        this.showProgress = false;
        this.product = response;
        this.titleGroupForm = this.coreService.translationService.buildFormGroup(this.product.title_translations);
        this.detailGroupForm = this.coreService.translationService.buildFormGroup(this.product.detail_translations);
        this.productRequest.price = this.product.vendor_products[0].price;
        this.productRequest.stock_quantity = this.product.vendor_products[0].price;
        this.productRequest.vendor_id = this.product.vendor_products[0].vendor_id;

        let selectedCategories = [];
        for (let i = 0; i < this.product.categories.length; i++) {
          selectedCategories.push(this.product.categories[i].id);
        }
        this.productRequest.categories = selectedCategories;

        this.groupFormItems = this.groupForm.get('items') as FormArray;
        for (let i = 0; i < this.product.addon_groups.length; i++) {
          this.groupFormItems.push(this.createGroupItem(this.product.addon_groups[i]));
        }

        this.productRequest.meta = this.product.meta;

        return response;
      }
      ))
  }

  saveProduct() {
    this.metaeditorComponent.updatedMetaProperty();
    
    this.showProgressButton = true;

    const formData: FormData = new FormData();
    formData.append('title_translations', this.coreService.translationService.buildRequestParam(this.titleGroupForm));
    formData.append('detail_translations', this.coreService.translationService.buildRequestParam(this.detailGroupForm));
    formData.append('price', this.productRequest.price);
    formData.append('stock_quantity', this.productRequest.stock_quantity);
    formData.append('vendor_id', this.productRequest.vendor_id);
    formData.append('meta', JSON.stringify(this.productRequest.meta));

    for (let i = 0; i < this.productRequest.categories.length; i++) {
      formData.append('categories[]', this.productRequest.categories[i]);
    }

    // handle addon groups and choices
    const group = this.groupForm.controls.items as FormArray;
    for (let i = 0; i < group.controls.length; i++) {
      const innerGroup = group.controls[i] as FormGroup;
      const groupTitleForm = innerGroup.controls.title as FormGroup;
      formData.append('addon_groups[' + i + '][title_translations]', this.coreService.translationService.buildRequestParam(groupTitleForm));
      formData.append('addon_groups[' + i + '][min_choices]', innerGroup.controls.min_choice.value);
      formData.append('addon_groups[' + i + '][max_choices]', innerGroup.controls.max_choice.value);
      const choice = innerGroup.controls.choiceItems as FormArray;
      for (let j = 0; j < choice.controls.length; j++) {
        const innerChoice = choice.controls[j] as FormGroup;
        const choiceTitleForm = innerChoice.controls.title as FormGroup;
        formData.append('addon_groups[' + i + '][choices][' + j + '][title_translations]', this.coreService.translationService.buildRequestParam(choiceTitleForm));
        formData.append('addon_groups[' + i + '][choices][' + j + '][price]', innerChoice.controls.price.value);
      }
    }

    for (let i = 0; i < this.productRequest.images.length; i++) {
      formData.append('images[]', this.productRequest.images[i]);
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
          this.productError.title_translations = errors?.title_translations;
          this.productError.detail_translations = errors?.detail_translations;
          this.productError.price = errors?.price;
          this.productError.stock_quantity = errors?.stock_quantity;
          this.productError.vendor_id = errors?.vendor_id;
          this.productError.categories = errors?.categories;
          this.productError.images = errors?.images;
        }
      },
    );
  }

  back() {
    this.coreService.location.back();
  }

  getTitleItems() {
    return this.titleGroupForm.get('items') as FormArray;
  }

  getDetailItems() {
    return this.detailGroupForm.get('items') as FormArray;
  }

  onImageChanged(event, index) {
    const file = event.target.files[0];
    this.productRequest.images[index] = file;
  }

  createGroupItem(group: Addongroup): FormGroup {
    return this.formBuilder.group({
      title: this.coreService.translationService.buildFormGroup(group.title_translations),
      min_choice: group.min_choices,
      max_choice: group.max_choices,
      choiceItems: this.formBuilder.array(this.createChoiceItem(group)),
    });
  }

  createChoiceItem(group: Addongroup): Array<FormGroup> {
    const choices: Array<FormGroup> = [];

    for (let i = 0; i < group.addon_choices.length; i++) {
      choices.push(this.formBuilder.group({
        title: this.coreService.translationService.buildFormGroup(group.addon_choices[i].title_translations),
        price: group.addon_choices[i].price,
      }));
    }
    return choices;
  }

  addNewGroup() {
    this.groupFormItems.push(
      this.formBuilder.group({
        title: this.coreService.translationService.buildFormGroup(null),
        min_choice: '',
        max_choice: '',
        choiceItems: this.formBuilder.array([]),
      }));
  }

  addNewChoice(groupIndex) {
    const group = this.groupFormItems.at(groupIndex) as FormGroup;
    const items = group.controls.choiceItems as FormArray;
    items.push(
      this.formBuilder.group({
        title: this.coreService.translationService.buildFormGroup(null),
        price: 0.0,
      }));
  }

  deleteChoice(groupIndex, choiceIndex) {
    const group = this.groupFormItems.at(groupIndex) as FormGroup;
    const items = group.controls.choiceItems as FormArray;
    items.removeAt(choiceIndex);
  }

  deleteGroup(groupIndex) {
    this.groupFormItems.removeAt(groupIndex);
  }

  getFormGroupItems() {
    return <FormGroup>this.groupForm.get('items');
  }
}

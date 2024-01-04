import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap, map, concatMap } from 'rxjs/operators';
import 'rxjs/add/operator/filter';

import { Delivery } from '../../../@core/models/delivery/delivery';
import { DeliveryRequest } from '../../../@core/models/delivery/delivery.request';
import { DeliveryError } from '../../../@core/models/delivery/delivery.error';
import { CoreService } from '../../../@core/service/core.service';
import { ToastStatus } from '../../../@core/service/toast.service';
import { Observable, empty, of } from 'rxjs';
import { DeliveryClient } from '../../../@core/network/delivery-client.service';
import { FormGroup, FormArray } from '@angular/forms';
import { Category } from '../../../@core/models/category/category';
import { CategoryClient } from '../../../@core/network/category-client.service';
import { User } from '../../../@core/models/user/user';

@Component({
  selector: 'save',
  templateUrl: './save.component.html',
})
export class SaveComponent implements OnInit, IsEditable {

  delivery: Delivery = new Delivery();
  deliveryRequest: DeliveryRequest = new DeliveryRequest();
  deliveryError: DeliveryError = new DeliveryError();
  showProgress: boolean = false;
  showProgressButton: boolean = false;
  categories: Array<Category> = [];
  editId = null;

  constructor(private client: DeliveryClient, public coreService: CoreService, public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getEditData();
  }

  getEditData() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editId = id;
      this.getDataById(id).subscribe();
    }
  }

  getDataById(id: string): Observable<Delivery> {
    this.showProgress = true;
    return this.client.show(id).pipe(
      map((response) => {
        this.showProgress = false;
        this.delivery = response;
        this.deliveryRequest.assigned = this.delivery.assigned;
        this.deliveryRequest.is_online = this.delivery.is_online;
        this.deliveryRequest.is_verified = this.delivery.is_verified;
        this.deliveryRequest.latitude = this.delivery.latitude;
        this.deliveryRequest.longitude = this.delivery.longitude;
        return response;
      }
      ))
  }

  saveDelivery() {
    this.showProgressButton = true;

    const formData: FormData = new FormData();
    formData.append('assigned', String(this.deliveryRequest.assigned));
    formData.append('is_online', String(this.deliveryRequest.is_online));
    formData.append('is_verified', String(this.deliveryRequest.is_verified));
    formData.append('latitude', this.deliveryRequest.latitude);
    formData.append('longitude', this.deliveryRequest.longitude);

    // user information
    if(!this.editId) {
      formData.append('email', this.deliveryRequest.email);
      formData.append('mobile_number', this.deliveryRequest.mobile_number);
      formData.append('password', this.deliveryRequest.password);
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
          this.deliveryError.longitude = errors?.longitude;
          this.deliveryError.latitude = errors?.latitude;
          this.deliveryError.assigned = errors?.assigned;
          this.deliveryError.is_online = errors?.is_online;
          this.deliveryError.is_verified = errors?.is_verified;

          this.deliveryError.email = errors?.email;
          this.deliveryError.mobile_number = errors?.mobile_number;
          this.deliveryError.password = errors?.password;
        }
      },
    );
  }

  back() {
    this.coreService.location.back();
  }

  onIsOnlineChange(value) {
    this.deliveryRequest.is_online = value ? 1 : 0;
  }

  onIsVerifiedChange(value) {
    this.deliveryRequest.is_verified = value ? 1 : 0;
  }
}

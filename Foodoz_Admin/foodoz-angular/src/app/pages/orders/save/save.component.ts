import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap, map, concatMap, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/filter';

import { Order } from '../../../@core/models/order/order';
import { OrderRequest } from '../../../@core/models/order/order.request';
import { OrderError } from '../../../@core/models/order/order.error';
import { CoreService } from '../../../@core/service/core.service';
import { ToastStatus } from '../../../@core/service/toast.service';
import { Observable, empty, of } from 'rxjs';
import { OrderClient } from '../../../@core/network/order-client.service';
import { FormGroup, FormArray } from '@angular/forms';
import { Category } from '../../../@core/models/category/category';
import { CategoryClient } from '../../../@core/network/category-client.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'save',
  templateUrl: './save.component.html',
})
export class SaveComponent implements OnInit, IsEditable {
  apiLoaded: Observable<boolean>;
  @ViewChild("googleMap", { static: false }) public googleMap: any;

  order: Order = new Order();
  orderRequest: OrderRequest = new OrderRequest();
  orderError: OrderError = new OrderError();
  showProgress: boolean = false;
  showProgressButton: boolean = false;
  categories: Array<Category> = [];
  orderStatusList: Array<string> = ['new', 'pending', 'cancelled', 'rejected', 'refund', 'hold', 'failed', 'accepted', 'preparing', 'prepared', 'dispatched', 'intransit', 'complete'];
  editId = null;

  constructor(private client: OrderClient, public coreService: CoreService, public route: ActivatedRoute,
    public categoryClient: CategoryClient, httpClient: HttpClient) {
    let mapsApiKey = coreService.appConfigService.getConfig().mapsApiKey;
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=' + mapsApiKey, 'callback')
      .pipe(
        map(() => {
          return true;
        }),
        catchError(() => of(false)),
      );

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

  getDataById(id: string): Observable<Order> {
    this.showProgress = true;
    return this.client.show(id).pipe(
      map((response) => {
        this.showProgress = false;
        this.order = response;
        this.orderRequest.status = this.order.status;

        this.setMapBounds();

        return response;
      }
      ))
  }

  saveOrder() {
    this.showProgressButton = true;

    const formData: FormData = new FormData();
    formData.append('status', this.orderRequest.status);

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
          this.orderError.status = errors?.status;
        }
      },
    );
  }

  back() {
    this.coreService.location.back();
  }

  parseFloat(number) {
    return parseFloat(number);
  }

  setMapBounds() {
    const bounds: google.maps.LatLngBounds = new google.maps.LatLngBounds();
    bounds.extend(new google.maps.LatLng(parseFloat(this.order.address.latitude), parseFloat(this.order.address.longitude)));
    bounds.extend(new google.maps.LatLng(parseFloat(this.order.vendor.latitude), parseFloat(this.order.vendor.longitude)));
    if (this.order.delivery?.delivery?.latitude) {
      bounds.extend(new google.maps.LatLng(parseFloat(this.order.delivery?.delivery?.latitude), parseFloat(this.order.delivery?.delivery?.longitude)));
    }
    this.googleMap.fitBounds(bounds);
  }

  onBoundsChanged() {
    if(this.googleMap.getZoom() > 13) {
      this.googleMap.zoom = 13;
    }
  }
}

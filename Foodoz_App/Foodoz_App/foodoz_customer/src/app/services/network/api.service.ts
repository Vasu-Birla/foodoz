import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from 'src/app/app.config';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Country } from 'src/models/country.models';
import { AuthResponse } from 'src/models/auth-response.models';
import { SocialLoginRequest } from 'src/models/sociallogin-request.models';
import { SignUpRequest } from 'src/models/auth-signup-request.models';
import { MyMeta } from 'src/models/meta.models';
import { MyAddress } from 'src/models/address.models';
import { BaseListResponse } from 'src/models/base-list.models';
import { Helper } from 'src/models/helper.models';
import { PaymentMethod } from 'src/models/payment-method.models';
import { SupportRequest } from 'src/models/support-request.models';
import { User } from 'src/models/user.models';
import { RateRequest } from 'src/models/rate-request.models';
import { Category } from 'src/models/category.models';
import { Product, ProductAddon } from 'src/models/product.models';
import { OrderRequest } from 'src/models/order-request.models';
import { Coupon } from 'src/models/coupon.models';
import { Order, OrderPayment } from 'src/models/order.models';
import { Vendor } from 'src/models/vendor.models';
import { TranslateService } from '@ngx-translate/core';
import { WalletTransaction } from 'src/models/wallet-transaction.models';
import { AppoiBookRequest, AppointeeList } from 'src/models/table-booking.models';
import { OrderMultiVendor } from 'src/models/order-multi-vendor.models';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private myHeaders: HttpHeaders;

  private currency_icon: string;
  public locale: string;
  private distance_metric = "km";
  private reviewedIds = new Array<string>();
  private uuid: string = "xxx";
  private platform: string = "android";
  userMe: User;

  constructor(@Inject(APP_CONFIG) private config: AppConfig, private http: HttpClient, private translateService: TranslateService) { }

  reloadSetting() {
    this.currency_icon = Helper.getSetting("currency_icon");
    this.locale = Helper.getSetting("locale");
    let dm = Helper.getSetting("distance_metric");
    if (dm) this.distance_metric = dm.toLowerCase();
  }

  setUserMe(user: User) {
    this.userMe = user;
  }

  getUserMe(): User {
    return this.userMe;
  }

  reloadItemsReviewed() {
    this.reviewedIds = Helper.getReviewedProductIds();
  }

  setupHeaders(authToken?: string) {
    let tokenToUse = authToken ? authToken : Helper.getToken();
    let savedLanguageCode = Helper.getLanguageDefault();
    this.myHeaders = tokenToUse ? new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': ('Bearer ' + tokenToUse),
      'X-Localization': String(savedLanguageCode ? savedLanguageCode : this.config.availableLanguages[0].code),
      'X-Device-Id': this.uuid ? this.uuid : "xxx",
      'X-Device-Type': this.platform ? this.platform : "android"
    }) : new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Localization': String(savedLanguageCode ? savedLanguageCode : this.config.availableLanguages[0].code),
      'X-Device-Id': this.uuid ? this.uuid : "xxx",
      'X-Device-Type': this.platform ? this.platform : "android"
    });
  }

  setUuidAndPlatform(uuid: string, platform: string) {
    this.uuid = uuid;
    this.platform = platform ? String(platform).toLowerCase() : platform;
    this.setupHeaders();
  }

  public getCountries(): Observable<Array<Country>> {
    return this.http.get<Array<Country>>('./assets/json/countries.json').pipe(
      tap(data => {
        let indiaIndex = -1;
        // if (data) {
        //   for (let i = 0; i < data.length; i++) {
        //     if (data[i].name == "India") {
        //       indiaIndex = i;
        //       break;
        //     }
        //   }
        // }
        if (indiaIndex != -1) data.unshift(data.splice(indiaIndex, 1)[0]);
      }),
      catchError(this.handleError<Array<Country>>('getCountries', []))
    );
  }

  public postURL(url: string): Observable<any> {
    return this.http.post<any>(url, {}, { headers: this.myHeaders });
  }

  public getContactLink(): Observable<{ link: string }> {
    return this.http.get<{ link: string }>('https://dashboard.vtlabs.dev/whatsapp.php?product_name=hungerz&source=application', { headers: this.myHeaders });
  }

  public postNotification(roleTo: string, userIdTo: string): Observable<any> {
    return this.http.post<any>(this.config.apiBase + 'api/user/push-notification', { role: roleTo, user_id: userIdTo }, { headers: this.myHeaders });
  }

  public getURL(url: string, urlParams?: URLSearchParams): Observable<any> {
    return this.http.get<any>(urlParams ? (url + "?" + urlParams.toString()) : url, { headers: this.myHeaders });
  }

  public getSettings(): Observable<Array<MyMeta>> {
    return this.http.get<Array<MyMeta>>(this.config.apiBase + 'api/settings', { headers: this.myHeaders });
  }

  public submitSupport(supportRequest: SupportRequest): Observable<{}> {
    return this.http.post<{}>(this.config.apiBase + "api/support", supportRequest, { headers: this.myHeaders });
  }

  public checkUser(checkUserRequest: any): Observable<{}> {
    return this.http.post<{}>(this.config.apiBase + 'api/check-user', checkUserRequest, { headers: this.myHeaders });
  }

  public loginSocial(socialLoginRequest: SocialLoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.config.apiBase + 'api/social/login', socialLoginRequest, { headers: this.myHeaders }).pipe(tap(data => this.setupUserMe(data.user)));
  }

  public loginUser(loginTokenRequest: { token: string, role: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.config.apiBase + 'api/login', loginTokenRequest, { headers: this.myHeaders }).pipe(tap(data => this.setupUserMe(data.user)));
  }

  public createUser(signUpRequest: SignUpRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.config.apiBase + 'api/register', signUpRequest, { headers: this.myHeaders }).pipe(tap(data => this.setupUserMe(data.user)));
  }

  public deleteUser(): Observable<any> {
    return this.http.delete<any>(this.config.apiBase + 'api/user', { headers: this.myHeaders });
  }

  public updateUser(updateRequest): Observable<User> {
    return this.http.put<User>(this.config.apiBase + 'api/user', updateRequest, { headers: this.myHeaders }).pipe(tap(data => this.setupUserMe(data)));
  }

  public rateUser(uId: number, rateRequest: RateRequest): Observable<{}> {
    return this.http.post<{}>(this.config.apiBase + "api/user/ratings/" + uId, JSON.stringify(rateRequest), { headers: this.myHeaders });
  }

  public getCategoriesParents(scope?: string): Observable<Array<Category>> {
    let urlParams = new URLSearchParams();
    urlParams.append("pagination", "0");
    urlParams.append("parent", "1");
    if (scope) urlParams.append("scope", scope);
    return this.http.get<Array<Category>>(this.config.apiBase + "api/categories?" + urlParams.toString(), { headers: this.myHeaders }).pipe(tap(data => {
      if (data && data.length) for (let cat of data) this.setupCategory(cat);
    })
      //, catchError(this.handleError<Array<Category>>('getCategoriesParents', this.getTestCategories()))
    );
  }

  public getBanners(scope: string): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.config.apiBase + "api/banners?pagination=0&parent=1&scope=" + scope, { headers: this.myHeaders }).pipe(tap(data => {
      if (data && data.length) for (let cat of data) this.setupCategory(cat);
    })
      //, catchError(this.handleError<Array<Category>>('getCategoriesParents', this.getTestCategories()))
    );
  }

  public getVendorsForTypes(location: MyAddress, types: Array<string>) {
    this.reloadSetting();
    let requests = [];
    for (let type of types) requests.push(this.getVendorsSort(location, type));
    return forkJoin(requests).pipe(catchError(error => of(error)));
  }

  public getVendorsSort(location: MyAddress, type: string, page?: number): Observable<Array<BaseListResponse>> {
    let urlParams = new URLSearchParams();
    urlParams.append("sort", String(type));
    urlParams.append("lat", String(location.latitude));
    urlParams.append("long", String(location.longitude));
    if (page) urlParams.append("page", String(page)); else urlParams.append("pagination", String(0));
    return this.http.get<Array<BaseListResponse>>(this.config.apiBase + "api/vendors/list?" + urlParams.toString(), { headers: this.myHeaders }).pipe(tap((data: any) => {
      let locale = Helper.getLocale();
      if (data.data && data.data.length) data.data.map(vendor => this.setupVendor(vendor, location, locale));
    })
    );
  }

  public getCategoriesVendors(location: MyAddress, parentId?: number): Observable<Array<BaseListResponse>> {
    let urlParams = new URLSearchParams();
    if (parentId) urlParams.append("category", String(parentId));
    urlParams.append("lat", String(location.latitude));
    urlParams.append("long", String(location.longitude));
    return this.http.get<Array<BaseListResponse>>(this.config.apiBase + "api/vendors/list?" + urlParams.toString(), { headers: this.myHeaders }).pipe(tap((data: any) => {
      let locale = Helper.getLocale();
      if (data.data && data.data.length) data.data.map(vendor => this.setupVendor(vendor, location, locale));
    })
    );
  }

  public getVendorsFavorite(): Observable<Array<Vendor>> {
    let currentLocation = Helper.getAddressSelected();
    return this.http.get<Array<Vendor>>(this.config.apiBase + "api/vendors/favourites/list", { headers: this.myHeaders }).pipe(tap(data => {
      let locale = Helper.getLocale();
      if (data && data.length) data.map(vendor => { this.setupVendor(vendor, currentLocation, locale); });
    })
      //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
    );
  }

  public getBalance(): Observable<{ balance: number }> {
    return this.http.get<{ balance: number }>(this.config.apiBase + 'api/user/wallet/balance', { headers: this.myHeaders }).pipe(tap(data => {
      if (!data.balance) data.balance = 0;
      data.balance = Helper.toFixedNumber(Number(data.balance));
    }));
  }

  public getTransactions(): Observable<BaseListResponse> {
    return this.http.get<BaseListResponse>(this.config.apiBase + 'api/user/wallet/transactions', { headers: this.myHeaders }).pipe(tap(data => {
      if (data && data.data && data.data.length) for (let trans of data.data) this.setupTransaction(trans);
    }));
  }

  public setupTransaction(transaction: WalletTransaction) {
    transaction.created_at = Helper.formatTimestampDateTime(transaction.created_at, this.locale);
    transaction.updated_at = Helper.formatTimestampDateTime(transaction.updated_at, this.locale);
    if (!transaction.amount) transaction.amount = 0;
    transaction.amount = Helper.toFixedNumber(Number(transaction.amount));
    if (transaction.meta && transaction.meta.source_amount) transaction.meta.source_amount = Helper.toFixedNumber(Number(transaction.meta.source_amount));
  }

  public walletDeposit(depositRequest): Observable<OrderPayment> {
    return this.http.post<OrderPayment>(this.config.apiBase + 'api/user/wallet/deposit', depositRequest, { headers: this.myHeaders });
  }

  public stripePayment(pId: number, stripeTokenId: string): Observable<{ success: boolean; message: string; }> {
    return this.http.get<{ success: boolean; message: string; }>(this.config.apiBase + 'api/payment/stripe/' + pId + "?token=" + stripeTokenId, { headers: this.myHeaders });
  }

  public walletPayout(pId: number): Observable<{ success: boolean; message: string; }> {
    return this.http.get<{ success: boolean; message: string; }>(this.config.apiBase + 'api/payment/wallet/' + pId, { headers: this.myHeaders });
  }

  public getVendorsWithQuery(location: MyAddress, query: string, page?: number): Observable<BaseListResponse> {
    this.reloadSetting();
    let urlParams = new URLSearchParams();
    urlParams.append("search", query);
    if (page) urlParams.append("page", String(page)); else urlParams.append("pagination", "0");
    urlParams.append("lat", String(location.latitude));
    urlParams.append("long", String(location.longitude));
    return this.http.get<BaseListResponse>(this.config.apiBase + "api/vendors/list?" + urlParams.toString(), { headers: this.myHeaders }).pipe(tap(data => {
      let locale = Helper.getLocale();
      if (data && data.data && data.data.length) { data.data.map(vendor => this.setupVendor(vendor, location, locale)); }
    })
      //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
    );
  }

  public getProductsWithQuery(location: MyAddress, query: string, page?: number): Observable<BaseListResponse> {
    this.reloadSetting();
    let urlParams = new URLSearchParams();
    urlParams.append("search", query);
    if (page) urlParams.append("page", String(page)); else urlParams.append("pagination", "0");
    if (location) { urlParams.append("lat", String(location.latitude)); urlParams.append("long", String(location.longitude)); }
    return this.http.get<BaseListResponse>(this.config.apiBase + "api/products?" + urlParams.toString(), { headers: this.myHeaders }).pipe(tap(data => {
      let locale = Helper.getLocale();
      if (data && data.data && data.data.length) this.setupProductRemoveUnfilled(data.data);
      if (data && data.data && data.data.length) for (let pro of data.data) { this.setupProduct(pro); this.setupVendor(pro.vendor_products[0].vendor, location, locale) }
    })
      //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
    );
  }

  public getVendors(urlParams: URLSearchParams): Observable<BaseListResponse> {
    this.reloadSetting();
    return this.http.get<BaseListResponse>(this.config.apiBase + "api/vendors/list?" + urlParams.toString(), { headers: this.myHeaders });
  }

  public getVendorsWithId(vendorId, location: MyAddress): Observable<Vendor> {
    let locale = Helper.getLocale();
    return this.http.get<Vendor>(this.config.apiBase + "api/vendors/" + vendorId, { headers: this.myHeaders }).pipe(tap(data => this.setupVendor(data, location, locale)));
  }

  public getProductsWithParams(urlParams: URLSearchParams): Observable<BaseListResponse> {
    this.reloadSetting();
    return this.http.get<BaseListResponse>(this.config.apiBase + "api/products?" + urlParams.toString(), { headers: this.myHeaders }).pipe(tap(data => {
      if (data && data.data && data.data.length) this.setupProductRemoveUnfilled(data.data);
      if (data && data.data && data.data.length) for (let pro of data.data) this.setupProduct(pro);
    }));
  }

  public getVendorProducts(vendor_id: number, page: number): Observable<BaseListResponse> {
    this.reloadSetting();
    let urlParams = new URLSearchParams();
    urlParams.append("vendor", String(vendor_id));
    urlParams.append("page", String(page));
    return this.http.get<BaseListResponse>(this.config.apiBase + "api/products?" + urlParams.toString(), { headers: this.myHeaders }).pipe(tap(data => {
      if (data && data.data && data.data.length) for (let pro of data.data) this.setupProduct(pro);
    })
      //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
    );
  }

  public toggleVendorFavorite(productId): Observable<any> {
    return this.http.post<any>(this.config.apiBase + "api/vendors/favourites/" + productId, {}, { headers: this.myHeaders });
  }

  public getPaymentMethods(): Observable<Array<PaymentMethod>> {
    return this.http.get<Array<PaymentMethod>>(this.config.apiBase + 'api/payment/methods', { headers: this.myHeaders });
  }

  public getAddresses(): Observable<Array<MyAddress>> {
    return this.http.get<Array<MyAddress>>(this.config.apiBase + 'api/addresses', { headers: this.myHeaders });
  }

  public addressAdd(address): Observable<MyAddress> {
    return this.http.post<MyAddress>(this.config.apiBase + 'api/addresses', address, { headers: this.myHeaders });
  }

  public addressUpdate(address): Observable<MyAddress> {
    return this.http.put<MyAddress>(this.config.apiBase + 'api/addresses/' + address.id, address, { headers: this.myHeaders });
  }

  public createOrder(orderRequest: OrderRequest): Observable<OrderMultiVendor> {
    return this.http.post<OrderMultiVendor>(this.config.apiBase + 'api/orders', orderRequest, { headers: this.myHeaders });
  }

  public checkCoupon(couponCode: string): Observable<Coupon> {
    return this.http.get<Coupon>(this.config.apiBase + 'api/coupons/check-validity?code=' + couponCode, { headers: this.myHeaders });
  }

  public calculateDeliveryFee(vendorId, sourceLat, sourceLng, destLat, destLng): Observable<{ delivery_fee: any }> {
    let urlParams = new URLSearchParams();
    urlParams.append("vendor_id", String(vendorId));
    urlParams.append("source_lat", String(sourceLat));
    urlParams.append("source_lng", String(sourceLng));
    urlParams.append("dest_lat", String(destLat));
    urlParams.append("dest_lng", String(destLng));
    urlParams.append("order_type", "NORMAL"); //'order_type' => 'required|in:CUSTOM,NORMAL'
    return this.http.get<{ delivery_fee: any }>(this.config.apiBase + 'api/orders/calculate-delivery-fee?' + urlParams.toString(), { headers: this.myHeaders });
  }

  public getOrders(userId, pageNo: number): Observable<BaseListResponse> {
    this.reloadSetting();
    this.reloadItemsReviewed();
    let urlParams = new URLSearchParams();
    // urlParams.append("user", String(userId));
    urlParams.append("page", String(pageNo));
    return this.http.get<BaseListResponse>(this.config.apiBase + "api/orders?" + urlParams, { headers: this.myHeaders }).pipe(tap(data => {
      if (data && data.data && data.data.length) this.setupOrderRemoveUnfilled(data.data);
      for (let order of data.data) this.setupOrder(order);
    }));
  }

  public getAppointmentList(userId, pageNo: number): Observable<BaseListResponse> {
    let urlParams = new URLSearchParams();
    urlParams.append("appointer", String(userId));
    if (pageNo) urlParams.append("page", String(pageNo));
    return this.http.get<BaseListResponse>(this.config.apiBase + "api/appointment?" + urlParams, { headers: this.myHeaders }).pipe(tap(data => {
      if (data && data.data && data.data.length) this.setupAppointmenRemoveUnfilled(data.data);
      for (let appoint of data.data) this.setupAppointment(appoint, moment());
    }));
  }

  public updateOrder(orderId, updateBody): Observable<Order> {
    return this.http.put<Order>(this.config.apiBase + "api/orders/" + orderId, updateBody, { headers: this.myHeaders }).pipe(tap(data => this.setupOrder(data)));
  }

  public getCoupons(): Observable<Array<Coupon>> {
    return this.http.get<Array<Coupon>>(this.config.apiBase + "api/coupons", { headers: this.myHeaders });
  }

  // public getRatingSummaryProduct(productId): Observable<Rating> {
  //   return this.http.get<Rating>(this.config.apiBase + "api/products/ratings/summary/" + productId, { headers: this.myHeaders }).pipe(tap(data => {
  //     let ratingSummaries = RatingSummary.defaultArray();
  //     for (let ratingSummaryResult of data.summary) {
  //       ratingSummaries[ratingSummaryResult.rounded_rating - 1].total = ratingSummaryResult.total;
  //       ratingSummaries[ratingSummaryResult.rounded_rating - 1].percent = ((ratingSummaryResult.total / data.total_ratings) * 100);
  //     }
  //     data.summary = ratingSummaries;
  //   }));
  // }

  public getReviewsVendor(productId, pageNo: number): Observable<BaseListResponse> {
    return this.http.get<BaseListResponse>(this.config.apiBase + "api/vendors/ratings/" + productId + "?page=" + pageNo, { headers: this.myHeaders }).pipe(tap(data => {
      let locale = Helper.getLocale();
      for (let review of data.data) review.created_at = Helper.formatTimestampDate(review.created_at, locale);
    }));
  }

  public postReviewVendor(productId, rr: RateRequest): Observable<any> {
    return this.http.post<any>(this.config.apiBase + "api/vendors/ratings/" + productId, rr, { headers: this.myHeaders });
  }

  public createAppointment(appointmentRequest: AppoiBookRequest): Observable<Order> {
    return this.http.post<Order>(this.config.apiBase + 'api/appointment', appointmentRequest, { headers: this.myHeaders });
  }

  private setupProductRemoveUnfilled(data: Array<Product>) {
    let found = false;
    for (let i = 0; i < data.length; i++) {
      if (!data[i].categories || !data[i].categories.length || !data[i].vendor_products || !data[i].vendor_products.length) {
        found = true;
        data.splice(i, 1);
      }
    }
    if (found) this.setupProductRemoveUnfilled(data);
  }

  private setupOrderRemoveUnfilled(data: Array<Order>) {
    let found = false;
    for (let i = 0; i < data.length; i++) {
      if (!data[i].products || !data[i].products.length || !data[i].vendor) {
        found = true;
        data.splice(i, 1);
      }
    }
    if (found) this.setupOrderRemoveUnfilled(data);
  }

  private setupAppointmenRemoveUnfilled(data: Array<Order>) {
    let found = false;
    for (let i = 0; i < data.length; i++) {
      if (!data[i].vendor) {
        found = true;
        data.splice(i, 1);
      }
    }
    if (found) this.setupAppointmenRemoveUnfilled(data);
  }

  private setupOrder(order: Order) {
    order.created_at = Helper.formatTimestampDateTime(order.created_at, this.locale);
    if (order.scheduled_on) order.scheduled_on = Helper.formatTimestampDate(order.scheduled_on, this.locale);

    order.total_toshow = this.currency_icon + Helper.toFixedNumber(Number(order.total));
    order.subtotal_toshow = this.currency_icon + Helper.toFixedNumber(Number(order.subtotal));
    if (order.delivery_fee) order.delivery_fee_toshow = this.currency_icon + Helper.toFixedNumber(Number(order.delivery_fee));
    if (order.discount) order.discount_toshow = this.currency_icon + Helper.toFixedNumber(Number(order.discount));
    if (order.taxes) order.taxes_toshow = this.currency_icon + Helper.toFixedNumber(Number(order.taxes));

    for (let product of order.products) {
      if (product.addon_choices && product.addon_choices.length) {
        product.addon_choices.map(group => {
          product.addonChoiceToShow = product.addonChoiceToShow ? product.addonChoiceToShow + ", " + group.addon_choice.title : group.addon_choice.title;
          group.addon_choice.showChoicePrice = this.currency_icon + group.addon_choice.price;
        })
      }
      product.total_toshow = this.currency_icon + Helper.toFixedNumber(Number(product.total));
      if (product.vendor_product) {
        if (!product.vendor_product.price) product.vendor_product.price = 0;
        product.vendor_product.priceToShow = this.currency_icon + Helper.toFixedNumber(Number(product.vendor_product.price));
        if (product.vendor_product.sale_price) product.vendor_product.sale_priceToShow = this.currency_icon + Helper.toFixedNumber(Number(product.vendor_product.sale_price));
        if (product.vendor_product.product) {
          if (!product.vendor_product.product.price) product.vendor_product.product.price = 0;
          product.vendor_product.product.priceToShow = this.currency_icon + Helper.toFixedNumber(Number(product.vendor_product.product.price));

          product.vendor_product.product.images = new Array<string>();
          if (product.vendor_product.product.mediaurls && product.vendor_product.product.mediaurls.images) for (let imgObj of product.vendor_product.product.mediaurls.images) if (imgObj["default"]) product.vendor_product.product.images.push(imgObj["default"]);
          if (!product.vendor_product.product.images.length) product.vendor_product.product.images.push("assets/images/empty_image.png");
        }
      }

    }
    //custom
    order.reviewed = (this.reviewedIds && this.reviewedIds.includes(String(String(order.vendor_id) + String(order.id))));

    let address = new MyAddress();
    if (order.address && order.address.latitude) address.latitude = order.address.latitude;
    if (order.address && order.address.longitude) address.longitude = order.address.longitude;
    if (order.vendor) this.setupVendor(order.vendor, address);

    if (order.delivery) {
      order.delivery.delivery.user.image_url = "assets/images/empty_dp.png";
      if (!order.delivery.delivery.user.mediaurls || !order.delivery.delivery.user.mediaurls.images) order.delivery.delivery.user.mediaurls = { images: [] };
      for (let imgObj of order.delivery.delivery.user.mediaurls.images) if (imgObj["default"]) { order.delivery.delivery.user.image_url = imgObj["default"]; break; }
    }

    if (order.user) {
      if (!order.user.mediaurls || !order.user.mediaurls.images) order.user.mediaurls = { images: [] };
      order.user.image_url = "assets/images/empty_dp.png";
      for (let imgObj of order.user.mediaurls.images) if (imgObj["default"]) { order.user.image_url = imgObj["default"]; break; }
    }
    if (order.order_type) order.order_type = order.order_type.toLowerCase();
  }

  setupAppointment(appointment: AppointeeList, momentNow: moment.Moment) {
    if (!appointment.meta) appointment.meta = {};
    if (!appointment.status) appointment.status = "pending";
    appointment.momentAppointment = moment(appointment.date + " " + appointment.time_from);
    appointment.isPassed = momentNow > appointment.momentAppointment;

    appointment.updated_at = Helper.formatTimestampDateTime(appointment.updated_at, this.locale);
    appointment.time_from = Helper.formatTimestampTime(appointment.date + 'T' + appointment.time_from + 'Z', this.locale);
    appointment.date = Helper.formatTimestampDayMonth(appointment.date, this.locale);
    if (appointment.user) {
      if (!appointment.user.mediaurls || !appointment.user.mediaurls.images) appointment.user.mediaurls = { images: [] };
      appointment.user.image_url = "assets/images/empty_dp.png";
      for (let imgObj of appointment.user.mediaurls.images) if (imgObj["default"]) { appointment.user.image_url = imgObj["default"]; break; }
    }
    if (appointment.vendor) {
      if (!appointment.vendor.mediaurls || !appointment.vendor.mediaurls.images) appointment.vendor.mediaurls = { images: [] };
      appointment.vendor.image = "assets/images/empty_dp.png";
      for (let imgObj of appointment.vendor.mediaurls.images) if (imgObj["default"]) { appointment.vendor.image = imgObj["default"]; break; }
    }
  }

  private setupCategory(category: Category) {
    if (category.mediaurls && category.mediaurls.images) for (let imgObj of category.mediaurls.images) if (imgObj["default"]) { category.image = imgObj["default"]; break; }
    if (!category.image) category.image = "assets/images/empty_image.png";
  }

  public setupProduct(product: Product) {
    if (product.addon_groups) {
      product.addon_groups = product.addon_groups.sort((g1: ProductAddon, g2: ProductAddon) => {
        return g1.min_choices < g2.min_choices ? 1 : (g1.min_choices > g2.min_choices ? -1 : 0);
      });
      for (let group of product.addon_groups) {
        if (!product.addOnChoicesIsMust) product.addOnChoicesIsMust = group.min_choices > 0;
        if (group.addon_choices) {
          for (let choice of group.addon_choices) {
            if (!choice.price) choice.price = 0;
            choice.priceToShow = this.currency_icon + Helper.toFixedNumber(Number(choice.price));
          }
        }
      }
    }

    product.vendorText = "";
    if (product.vendor_products && product.vendor_products.length) {
      for (let vp of product.vendor_products) {
        if (vp.vendor && vp.sale_price) product.sale_price = vp.sale_price;
        vp.priceToShow = this.currency_icon + Helper.toFixedNumber(Number(vp.price));
        product.in_stock = vp.stock_quantity != 0;

        if (vp.vendor) {
          if (!vp.vendor.mediaurls || !vp.vendor.mediaurls.images) vp.vendor.mediaurls = { images: [] };
          vp.vendor.image = "assets/images/empty_image.png";
          for (let imgObj of vp.vendor.mediaurls.images) if (imgObj["default"]) { vp.vendor.image = imgObj["default"]; break; }

          product.vendorText += (vp.vendor.name + ", ");
        }
      }
    }
    if (product.vendorText.length) product.vendorText = product.vendorText.substring(0, product.vendorText.length - 2);

    if (!product.ratings) product.ratings = 0;
    if (!product.ratings_count) product.ratings_count = 0;
    if (!product.price) product.price = 0;
    // if (product.priceWithAddon) {
    //   product.priceWithAddonToShow = this.currency_icon + product.priceWithAddon.toFixed(2);
    // } else {
    //   product.priceWithAddon = 0;
    // };
    product.ratings = Helper.toFixedNumber(Number(product.ratings));

    product.priceToShow = this.currency_icon + Helper.toFixedNumber(Number(product.price));
    if (product.sale_price) product.sale_priceToShow = this.currency_icon + Helper.toFixedNumber(Number(product.sale_price));

    if (product.categories && product.categories.length) {
      for (let cat of product.categories) this.setupCategory(cat);
    }

    product.images = new Array<string>();
    if (product.mediaurls && product.mediaurls.images) for (let imgObj of product.mediaurls.images) if (imgObj["default"]) product.images.push(imgObj["default"]);
    if (!product.images.length) product.images.push("assets/images/empty_image.png");

    if (typeof product.meta == "string") product.meta = JSON.parse(product.meta as string);
    if (!product.meta) product.meta = {};
    if (!product.meta.food_type) product.meta.food_type = "veg";
    product.meta.food_type = String(product.meta.food_type).includes("non") ? "non_veg" : "veg";
    if (!product.meta.ingredients) product.meta.ingredients = [];
    try {
      delete product.meta.discounted_price;
    } catch (e) { console.log(e); }
  }

  private setupUserMe(data) {
    if (!data.mediaurls || !data.mediaurls.images) data.mediaurls = { images: [] };
    if (!data.image_url) for (let imgObj of data.mediaurls.images) if (imgObj["default"]) { data.image_url = imgObj["default"]; break; }
  }

  setupVendor(vendor: Vendor, location: MyAddress, locale?: string) {
    if (!vendor.mediaurls || !vendor.mediaurls.images) vendor.mediaurls = { images: [] };
    vendor.image = "assets/images/empty_image.png";
    for (let imgObj of vendor.mediaurls.images) if (imgObj["default"]) { vendor.image = imgObj["default"]; break; }

    if (!vendor.ratings) vendor.ratings = 0.0;
    vendor.ratings = Helper.toFixedNumber(Number(vendor.ratings));

    vendor.categories_text = "";
    if (vendor.categories && vendor.categories.length) for (let cat of vendor.categories) vendor.categories_text += (cat.title + ", ");
    if (vendor.categories_text.length) vendor.categories_text = vendor.categories_text.substring(0, vendor.categories_text.length - 2);
    vendor.distance = this.getDistanceBetweenTwoCoordinates(location ? Number(location.latitude) : 0, location ? Number(location.longitude) : 0, Number(vendor.latitude), Number(vendor.longitude));
    vendor.distance_toshow = Helper.formatDistance(vendor.distance, this.distance_metric) + " " + this.translateService.instant(this.distance_metric);

    if (typeof vendor.meta == "string") vendor.meta = JSON.parse(vendor.meta as string);
    if (!vendor.meta) vendor.meta = {};
    if (vendor.meta.opening_time) vendor.opening_time_toshow = Helper.formatMillisTime(Number(vendor.meta.opening_time), locale ? locale : "en").toString();
    if (vendor.meta.closing_time) vendor.closing_time_toshow = Helper.formatMillisTime(Number(vendor.meta.closing_time), locale ? locale : "en").toString();
  }

  private getDistanceBetweenTwoCoordinates(lat1: number, lon1: number, lat2: number, lon2: number) {
    let R = 6371; // Radius of the earth in km 
    let dLat = (lat2 - lat1) * (Math.PI / 180);  // deg2rad below 
    let dLon = (lon2 - lon1) * (Math.PI / 180);
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c; // Distance in km
    return d * 1000; // Returning in meters
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

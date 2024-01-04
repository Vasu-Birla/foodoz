import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {OrderListResponse} from '../models/order/order-list-response';

import {Order} from '../models/order/order';
import {BaseClient} from './base-client.service';

@Injectable()
export class OrderClient extends BaseClient {

  public getBaseEndpoint() {
    return this.baseEndpoint + '/orders';
  }

  public list(): Observable<OrderListResponse> {
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.get<OrderListResponse>(this.getBaseEndpoint(),
        {headers: this.getHeaders(token)});
    }));
  }

  public show(id: string): Observable<Order> {
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.get<Order>(this.getBaseEndpoint() + '/' + id,
        {headers: this.getHeaders(token)});
    }));
  }

  public store(formData: FormData): Observable<Order> {
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.post<Order>(this.getBaseEndpoint(), formData,
        {headers: this.getHeaders(token, false)});
    }));
  }

  public update(id, formData: FormData): Observable<Order> {
    formData.append('_method', 'PUT');
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.post<Order>(this.getBaseEndpoint() +  '/' + id, formData,
        {headers: this.getHeaders(token, false)});
    }));
  }

  public delete(id): Observable<any> {
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.delete<any>(this.getBaseEndpoint() + '/' + id,
        {headers: this.getHeaders(token)});
    }));
  }

  public all(): Observable<Array<Order>> {
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.get<Array<Order>>(this.getBaseEndpoint() + '?pagination=0',
        {headers: this.getHeaders(token)});
    }));
  }
}

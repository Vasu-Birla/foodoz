import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {DeliveryListResponse} from '../models/delivery/delivery-list-response';

import {Delivery} from '../models/delivery/delivery';
import {BaseClient} from './base-client.service';

@Injectable()
export class DeliveryClient extends BaseClient {

  public getBaseEndpoint() {
    return this.baseEndpoint + '/deliveries';
  }

  public list(): Observable<DeliveryListResponse> {
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.get<DeliveryListResponse>(this.getBaseEndpoint(),
        {headers: this.getHeaders(token)});
    }));
  }

  public show(id: string): Observable<Delivery> {
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.get<Delivery>(this.getBaseEndpoint() + '/' + id,
        {headers: this.getHeaders(token)});
    }));
  }

  public store(formData: FormData): Observable<Delivery> {
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.post<Delivery>(this.getBaseEndpoint(), formData,
        {headers: this.getHeaders(token, false)});
    }));
  }

  public update(id, formData: FormData): Observable<Delivery> {
    formData.append('_method', 'PUT');
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.post<Delivery>(this.getBaseEndpoint() +  '/' + id, formData,
        {headers: this.getHeaders(token, false)});
    }));
  }

  public delete(id): Observable<any> {
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.delete<any>(this.getBaseEndpoint() + '/' + id,
        {headers: this.getHeaders(token)});
    }));
  }

  public all(): Observable<Array<Delivery>> {
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.get<Array<Delivery>>(this.getBaseEndpoint() + '?pagination=0',
        {headers: this.getHeaders(token)});
    }));
  }
}

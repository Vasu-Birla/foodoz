import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {VendorListResponse} from '../models/vendor/vendor-list-response';

import {Vendor} from '../models/vendor/vendor';
import {BaseClient} from './base-client.service';

@Injectable()
export class VendorClient extends BaseClient {

  public getBaseEndpoint() {
    return this.baseEndpoint + '/vendors';
  }

  public list(): Observable<VendorListResponse> {
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.get<VendorListResponse>(this.getBaseEndpoint(),
        {headers: this.getHeaders(token)});
    }));
  }

  public show(id: string): Observable<Vendor> {
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.get<Vendor>(this.getBaseEndpoint() + '/' + id,
        {headers: this.getHeaders(token)});
    }));
  }

  public store(formData: FormData): Observable<Vendor> {
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.post<Vendor>(this.getBaseEndpoint(), formData,
        {headers: this.getHeaders(token, false)});
    }));
  }

  public update(id, formData: FormData): Observable<Vendor> {
    formData.append('_method', 'PUT');
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.post<Vendor>(this.getBaseEndpoint() +  '/' + id, formData,
        {headers: this.getHeaders(token, false)});
    }));
  }

  public delete(id): Observable<any> {
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.delete<any>(this.getBaseEndpoint() + '/' + id,
        {headers: this.getHeaders(token)});
    }));
  }

  public all(): Observable<Array<Vendor>> {
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.get<Array<Vendor>>(this.getBaseEndpoint() + '?pagination=0',
        {headers: this.getHeaders(token)});
    }));
  }
}

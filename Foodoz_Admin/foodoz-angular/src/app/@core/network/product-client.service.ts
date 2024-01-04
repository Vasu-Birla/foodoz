import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ProductListResponse} from '../models/product/product-list-response';

import {Product} from '../models/product/product';
import {BaseClient} from './base-client.service';

@Injectable()
export class ProductClient extends BaseClient {

  public getBaseEndpoint() {
    return this.baseEndpoint + '/products';
  }

  public list(): Observable<ProductListResponse> {
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.get<ProductListResponse>(this.getBaseEndpoint(),
        {headers: this.getHeaders(token)});
    }));
  }

  public show(id: string): Observable<Product> {
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.get<Product>(this.getBaseEndpoint() + '/' + id,
        {headers: this.getHeaders(token)});
    }));
  }

  public store(formData: FormData): Observable<Product> {
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.post<Product>(this.getBaseEndpoint(), formData,
        {headers: this.getHeaders(token, false)});
    }));
  }

  public update(id, formData: FormData): Observable<Product> {
    formData.append('_method', 'PUT');
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.post<Product>(this.getBaseEndpoint() +  '/' + id, formData,
        {headers: this.getHeaders(token, false)});
    }));
  }

  public delete(id): Observable<any> {
    return this.authService.getToken().pipe(switchMap((token) => {
      return this.http.delete<any>(this.getBaseEndpoint() + '/' + id,
        {headers: this.getHeaders(token)});
    }));
  }
}

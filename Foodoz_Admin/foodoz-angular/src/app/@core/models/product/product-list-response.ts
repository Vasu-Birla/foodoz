import {Product} from './product';
import {BaseListResponse} from '../base-list.response';

export class ProductListResponse extends BaseListResponse {
  data: Array<Product>;
}

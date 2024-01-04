import {Delivery} from './delivery';
import {BaseListResponse} from '../base-list.response';

export class DeliveryListResponse extends BaseListResponse {
  data: Array<Delivery>;
}

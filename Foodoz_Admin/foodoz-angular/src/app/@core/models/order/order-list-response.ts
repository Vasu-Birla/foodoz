import {Order} from './order';
import {BaseListResponse} from '../base-list.response';

export class OrderListResponse extends BaseListResponse {
  data: Array<Order>;
}

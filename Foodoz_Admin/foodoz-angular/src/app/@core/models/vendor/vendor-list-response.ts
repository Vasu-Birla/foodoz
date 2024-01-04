import {Vendor} from './vendor';
import {BaseListResponse} from '../base-list.response';

export class VendorListResponse extends BaseListResponse {
  data: Array<Vendor>;
}

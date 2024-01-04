import { UserPartialRequest } from '../user/user-partial.request';

export class VendorRequest extends UserPartialRequest{
    name_translations: string;
    tagline_translations: string;
    details_translations: string;
    meta: object = {};
    minimum_order: string;
    delivery_fee: string;
    area: string;
    address: string;
    longitude: string;
    latitude: string;
    image: File;
    user_id: string;
    categories: Array<string>;
    is_verified: number = 0;
}

import { Category, MediaImage } from '../category/category';
import { User } from '../user/user';

export class Vendor {
    id: string;
    name: string;
    name_translations: object;
    tagline: string;
    tagline_translations: object;
    details: string;
    details_translations: object;
    meta: object;
    minimum_order: string;
    delivery_fee: string;
    area: string;
    address: string;
    longitude: string;
    latitude: string;
    user_id: string;
    mediaurls: Array<MediaImage>;
    categories: Array<Category>;
    user: User;
    is_verified: number;
}

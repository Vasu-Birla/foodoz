import { Category, MediaImage } from '../category/category';
import { User } from '../user/user';
import { Vendor } from '../vendor/vendor';
import { Addongroup } from './addongroup';

export class VendorProduct {
    id: string;
    price: string;
    stock_quantity: string;
    product_id: string;
    vendor_id: string;
    vendor: Vendor;

}

export class Product {
    id: string;
    title: string;
    title_translations: object;
    detail: string;
    detail_translations: object;
    meta: object;
    price: string;
    owner: string;
    parent_id: string;
    created_at: string;
    updated_at: string;
    mediaurls: Array<MediaImage>;
    categories: Array<Category>;
    user: User;
    vendor_products: Array<VendorProduct>;
    addon_groups: Array<Addongroup>;
}

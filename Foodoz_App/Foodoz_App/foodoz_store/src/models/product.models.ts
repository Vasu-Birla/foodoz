import { Category } from './category.models';
import { ProductVendor } from './vendor-product.models';

export class Product {
    id: number;
    title: string;
    detail: string;
    meta: any;
    price: number;
    sale_price: number;
    ratings: number;
    ratings_count: number;
    sells_count: number;
    owner: string; //admin,vendor
    parent_id: number;
    attribute_term_id: number;
    mediaurls: { images: Array<any> };
    created_at: string;
    updated_at: string;
    categories: Array<Category>;
    vendor_products: Array<ProductVendor>;
    is_favourite: boolean;

    prescription_required: boolean;
    priceToShow: string;
    sale_priceToShow: string;
    image_urls: Array<string>;
    stock_quantity_status: boolean;
    addon_groups: Array<AddonGroup>;
}
export class AddonGroup {
    id: number;
    title: string;
    min_choices: string;
    max_choices: string;
    product_id: number;
    addon_choices: Array<AddonChoices>;
    addonToShow: string;
}
export class AddonChoices {
    id: number;
    title: string;
    price: number;
    product_addon_group_id: number;
    priceToShow: string;
}
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
    owner: string; //admin,vendor
    parent_id: number;
    attribute_term_id: number;
    mediaurls: { images: Array<any> };
    created_at: string;
    updated_at: string;
    categories: Array<Category>;
    vendor_products: Array<ProductVendor>;
    is_favourite: boolean;
    addon_groups: Array<ProductAddon>;

    reviewed: boolean;
    priceToShow: string;
    sale_priceToShow: string;
    images: Array<string>;
    vendorText: string;
    quantity: number = 0;
    in_stock: boolean;
    addOnChoicesIsMust: boolean;
}
export class ProductAddon {
    id: number;
    title: string;
    product_id: number;
    min_choices: number;
    max_choices: number;
    addon_choices: Array<AddonChoices>;

    addonToShow: string;
    choiceIdSelected: number;
}
export class AddonChoices {
    id: number;
    title: string;
    price: number;
    product_addon_group_id: number;
    created_at: string;
    updated_at: string;

    priceToShow: string;
    selected: boolean;
}
export class ProductRequest {
    title_translations: string;
    detail_translations: string;
    meta: object = {"food_type": "veg"};
    price: string;
    stock_quantity: string;
    vendor_id: string;
    images: Array<File> = [];
    categories: Array<string> = [];
}

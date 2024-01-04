import { Product } from './product.models';
import { ProductVendor } from './vendor-product.models';

export class ProductRequest {
    title: string;
    detail: string;
    price: number;
    sale_price: number;
    vendor_id: number;
    categories: Array<number>;
    image_urls: Array<string>;
    stock_quantity: number;
    meta?: any;


    constructor() {
        this.categories = new Array();
        this.image_urls = new Array();
        this.stock_quantity = -1;
        this.meta = { food_type: null, ingredients: new Array(), serving: null, cooking_time: null, energy: null, discounted_price: 0 };
        this.detail = 'empty_detail';
        // this.ingredients = new Array();
    }

    static fromProduct(product: Product, vendorId: number): ProductRequest {
        let vendorProduct: ProductVendor;
        if (vendorId && product.vendor_products) {
            for (let vp of product.vendor_products) {
                if (vp.vendor && vp.vendor.id == vendorId) {
                    vendorProduct = vp;
                    break;
                }
            }
        }
        if (!vendorProduct && product.vendor_products.length) vendorProduct = product.vendor_products[0];
        let pr = new ProductRequest();
        pr.title = product.title;
        pr.detail = product.detail ? product.detail : 'empty_detail';
        pr.price = product.price;
        pr.sale_price = vendorProduct && vendorProduct.sale_price ? vendorProduct.sale_price : null;
        pr.stock_quantity = vendorProduct && vendorProduct.stock_quantity ? Number(vendorProduct.stock_quantity) : 0;
        pr.meta = product.meta;
        for (let img of product.image_urls) if (img != "assets/images/plc_item_image.png") pr.image_urls.push(img);
        return pr;
    }
}
export class ProductQuantity {
    stock_quantity: string;
}
export class ProductStockRequest {
    vendor_id: number;
    stock_quantity: number;
}
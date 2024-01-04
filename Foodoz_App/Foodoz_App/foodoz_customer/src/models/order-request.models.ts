export class OrderRequest {
    address_id: number;
    payment_method_id: number;
    payment_method_slug: string;
    coupon_code: string;
    products: Array<{ id: number; quantity: number; addons: Array<{ choice_id: number }>; }>;
    meta: string;
    notes: string;   // add new customization "notes"
    order_type: string; // add new customization "order type"

    constructor() {
        this.products = new Array<{ id: number; quantity: number; addons: Array<{ choice_id: number }>; }>();
    }
}
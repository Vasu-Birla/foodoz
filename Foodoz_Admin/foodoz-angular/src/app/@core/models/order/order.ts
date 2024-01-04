import { Category, MediaImage } from '../category/category';
import { User } from '../user/user';
import { Vendor } from '../vendor/vendor';
import { Address } from './address';
import { Delivery } from '../delivery/delivery';

export class OrderDelivery {
    status: string;
    delivery: Delivery;
}

export class PaymentMethod {
    title: string;
}

export class Payment {
    status: string;
    payment_method: PaymentMethod;
}

export class Order {
    id: number;
    user: User;
    vendor: Vendor;
    subtotal: string;
    taxes: string;
    delivery_fee: string;
    discount: string;
    total: string;
    type: string;
    created_at: string;
    updated_at: string;
    address: Address;
    delivery: OrderDelivery;
    payment: Payment;
    status: string;
}

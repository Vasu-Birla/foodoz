import { PaymentMethod } from "./payment-method.models";
import { User } from "./user.models";
import { Vendor } from "./vendor.models";

export class AppoiBookRequest {
    vendor_id: number;
    amount: number;
    date: string;
    time_from: string;
    time_to: string;
    duplicate_slots_allowed: number;
    meta: any;
    // is_guest: boolean;
    // customer_name: string;
    // customer_email: string;
    // customer_mobile: string;
    constructor() {
        this.meta = { person: "", note: "" };
        // this.is_guest = false;
        this.amount = 0;
        this.duplicate_slots_allowed = -1;
        this.time_to = "00:00";
    }
}

export class AppointeeList {
    id: number;
    meta: any;
    amount: number;
    amount_meta: number;
    date: string;
    time_from: string;
    time_to: string;
    status: string;
    is_guest: boolean;
    customer_name: string;
    customer_email: string;
    customer_mobile: string;
    payment: PaymentMethod;
    user: User;
    vendor: Vendor;
    created_at: string;
    updated_at: string;

    momentAppointment: any;
    type: string;
    isPassed: boolean;
}
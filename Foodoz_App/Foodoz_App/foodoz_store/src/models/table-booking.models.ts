import { PaymentMethod } from "./payment-method.models";
import { Profile } from "./profile.models";
import { User } from "./user.models";

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
    vendor: Profile;
    created_at: string;
    updated_at: string;

    type: string;
    momentAppointment: any;
    isPassed: boolean;
}
import { User } from './user.models';

export class Vendor {
    id: number;
    name: string;
    tagline: string;
    details: string;
    meta: any;
    mediaurls: { images: Array<any> };
    minimum_order: number;
    delivery_fee: number;
    area: string;
    address: string;
    longitude: number;
    latitude: number;
    is_verified: number;
    user_id: number;
    ratings: number;
    ratings_count: number;
    user: User;

    image: string;
    distance: number;
    distance_toshow: string;
    categories: Array<any>;
    product_categories: Array<any>;
    categories_text: string;
    is_favourite: boolean;
    opening_time_toshow: string;
    closing_time_toshow: string;
    opening_time: string;
    closing_time: string;
}
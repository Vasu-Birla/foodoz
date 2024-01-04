import { Category } from './category.models';
import { User } from './user.models';

export class Profile {
    id: number;
    name: string;
    tagline: string;
    user: User;
    user_id: number;
    ratings: number;
    is_verified: number;
    latitude: string;
    longitude: string;
    ratings_count: number;
    favourite_count: number;
    details: string;
    meta: any;
    mediaurls: { images: Array<any> };
    minimum_order: number;
    delivery_fee: number;
    area: string;
    address: string;
    categories: Array<Category>;
    product_categories: Array<Category>;

    image_urls: Array<string>;
    image: string;
    type: string;

    constructor() {
        this.categories = new Array<Category>();
        this.user = new User();
        this.meta = { opening_time: '', closing_time: '', green_time: '', yellow_time: '', red_time: '', tables: 0, table_booking: false, no_of_tables: 0, desk_app: false, review_app: false, emenu_app: false, kiosk_app: false, kitchecn_app: false };
    }
}
import { User } from '../user/user';

export class Delivery {
    id: string;
    assigned: number;
    is_online: number;
    is_verified: number;
    latitude: string;
    longitude: string;
    user: User;
    meta: object;
}
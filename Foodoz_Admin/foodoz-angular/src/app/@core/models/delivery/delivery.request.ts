import { UserPartialRequest } from '../user/user-partial.request';

export class DeliveryRequest  extends UserPartialRequest{
    assigned: number = 0;
    is_online: number = 0;
    is_verified: number = 0;
    latitude: string;
    longitude: string;
}

import { UserPartialError } from '../user/user-partial.error';

export class DeliveryError extends UserPartialError{
    assigned: Array<string>;
    is_online: Array<string>;
    is_verified: Array<string>;
    latitude: Array<string>;
    longitude: Array<string>;
}

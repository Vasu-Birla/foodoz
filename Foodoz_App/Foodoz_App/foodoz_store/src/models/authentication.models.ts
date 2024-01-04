import { User } from "./user.models";

export class AuthenticationRequest {
    identifiers: Array<identifier>;
    vendor_id: number;
}
export class identifier {
    identifier: string;
    type: string;
}
export class AuthenticationList {
    id: number;
    identifier: string;
    type: string;
    vendor: User;
    vendor_id: number;
    created_at: string;
}
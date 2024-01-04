export class UserRequest {
  name: string;
  email: string;
  image: File;
  mobile_number: string;
  password: string;
  roles: Array<string>;
  mobile_verified: number = 0;
  language: string;
  balance: number = 0;
}

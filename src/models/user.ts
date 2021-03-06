export interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    email_confirmation: string;
    new_email: string;
    password: string;
    password_confirmation: string;
    new_password: string;
    email_confirmed: boolean;
    address: string;
    address_addition: string;
    postcode: string;
    city: string;
    country: string;
}

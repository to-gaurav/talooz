import {COUNTRIES,RELIGIONS,NATIONALITIES,CASTES} from './data';
//import {Entity} from "app/user/profile/entity.model";

export enum Relation{FATHER, MOTHER, GUARDIAN};
export enum PType {PHONE, MOBILE, EMAIL, FAX, FACEBOOK, TWITTER};
export enum AddressType {HOME, RESIDENTIAL, BUSINESS, PERMANENT, RENTED, OFFICE};

export class Country{
}

export class Nationality{
}

export class Religion {
}

export class Caste {
}

export class Label {
}

export class Batch{
    batchId: string;
    batchName: string;
    batchDescription: string;
}

export class PaymentFrequency {
    public paymentFrequencyId: string;
    public description: string;
    public numberOfMonths: string;
}

export class Address{
    public address1: string;
    public address2: string;
    public city: string;
    public state: string;
    public country: string;
    public zip: string;
}
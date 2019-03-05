import {CreditCard} from './creditCard';

export interface Transaction {
    id: string,
    action: string;
    amount: number;
    brandId: number;
    card: CreditCard;
    currencyCode: string;
    trackingCode: string;
}

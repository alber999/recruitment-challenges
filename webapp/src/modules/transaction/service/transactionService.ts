import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Transaction} from '../domain/transaction';
import {CreditCard} from '../domain/creditCard';
import {ServiceUtil} from '../../../lib/ServiceUtil';
import {environment} from '../../../environments/environment';

@Injectable()
export class TransactionService {
    private static mapTransaction(res: any): Transaction {
        return {
            id: res.id,
            action: res.action,
            amount: res.amount,
            brandId: res.brandId,
            card: {
                expiryMonth: res.card.expiryMonth,
                expiryYear: res.card.expiryYear,
                firstSixDigits: res.card.firstSixDigits,
                lastFourDigits: res.card.lastFourDigits,
                holderName: res.card.holderName
            } as CreditCard,
            currencyCode: res.currencyCode,
            trackingCode: res.trackingCode,
        } as Transaction;
    }

    constructor(private httpClient: HttpClient) {
    }

    getAll(params?: { action?: string, currencyCode?: string }): Observable<Transaction[]> {
        return this.httpClient.get(
            environment.endpoints.transaction + '/transactions',
            ServiceUtil.httpOptions(params)).map(
            (res: any) => res.map((el: any) => TransactionService.mapTransaction(el)));
    }
}

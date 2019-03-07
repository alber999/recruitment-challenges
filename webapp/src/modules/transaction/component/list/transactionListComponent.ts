import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Transaction} from '../../domain/transaction';
import {TransactionStore} from '../../store/transactionStore';
import {TransactionStorePayload} from '../../store/transactionStorePayload';
import {TransactionActionCreator} from '../../action/transactionActionCreator';
import {ActionResult} from '../../../flux/action/actionResult';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-transaction-list',
    styleUrls: ['./transactionListComponent.scss'],
    templateUrl: './transactionListComponent.html',
    animations: [
        trigger('detailToggle', [
            state('collapsed', style({height: '0px', minHeight: '0', visibility: 'hidden'})),
            state('expanded', style({height: '*', visibility: 'visible'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class TransactionListComponent implements OnInit, OnDestroy {

    displayedColumns = ['cardHolderName', 'brand', 'cardLast4Digits', 'type', 'amount', 'currency'];
    transactionExpanded: Transaction;
    transactions: Observable<Transaction[]>;

    private static handleSubscription(payload: TransactionStorePayload): Transaction[] {
        return ActionResult.SUCCESS === payload.action.result ? payload.transactions : [];
    }

    constructor(
        private actionCreator: TransactionActionCreator,
        private store: TransactionStore) {
    }

    ngOnInit(): void {
        this.transactions = this.store.payload
            .filter((payload: TransactionStorePayload) => null != payload.action)
            .map((payload: TransactionStorePayload) => TransactionListComponent.handleSubscription(payload));

        this.actionCreator.getAll();
    }

    ngOnDestroy(): void {
        this.store.destroy();
    }

    toggleDetails(transaction: Transaction) {
        if (null == this.transactionExpanded || transaction.id !== this.transactionExpanded.id) {
            this.transactionExpanded = transaction;
        } else {
            this.transactionExpanded = null;
        }
    }
}

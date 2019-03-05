import {Action} from '../../flux/action/action';
import {Subscription} from 'rxjs/Subscription';
import {ActionOperation} from '../../flux/action/actionOperation';
import {Transaction} from '../domain/transaction';
import {ActionResult} from '../../flux/action/actionResult';
import {Dispatcher} from '../../flux/dispatcher/dispatcher';
import {ActionDomain} from '../../flux/action/actionDomain';
import {TransactionService} from '../service/transactionService';
import {Injectable} from '@angular/core';

@Injectable()
export class TransactionActionCreator {
    constructor(
        private dispatcher: Dispatcher,
        private transactionService: TransactionService) {
    }

    private static complete(subscription: Subscription): void {
        if (null != subscription) {
            subscription.unsubscribe();
        }
    }

    getAll(params?: { action?: string, currencyCode?: string }): void {

        const action: Action = {
            domain: ActionDomain.TRANSACTION,
            operation: ActionOperation.GET_ALL
        };

        const subscription: Subscription = this.transactionService.getAll(params)
            .subscribe(
                (transactions: Transaction[]) => this.next(action, transactions),
                (err: any) => this.error(action, err),
                () => TransactionActionCreator.complete(subscription));
    }

    private next(action: Action, transactions: Transaction[] = null): void {
        action.result = ActionResult.SUCCESS;
        action.data = transactions;
        this.dispatcher.dispatch(action);
    }

    private error(action: Action, error: any): void {
        action.result = ActionResult.ERROR;
        action.error = error.status;
        this.dispatcher.dispatch(action);
    }
}

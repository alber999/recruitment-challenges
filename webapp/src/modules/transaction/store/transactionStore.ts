import {Injectable} from '@angular/core';
import {Store} from '../../flux/store/store';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {TransactionStorePayload} from './transactionStorePayload';
import {Action} from '../../flux/action/action';
import {ActionDomain} from '../../flux/action/actionDomain';
import {Dispatcher} from '../../flux/dispatcher/dispatcher';
import {ActionOperation} from '../../flux/action/actionOperation';

@Injectable()
export class TransactionStore implements Store {

    private subject: BehaviorSubject<TransactionStorePayload> = new BehaviorSubject(new TransactionStorePayload());

    public payload: Observable<TransactionStorePayload> = this.subject.asObservable();

    private subscription: Subscription;

    constructor(private dispatcher: Dispatcher) {
        this.subscription = this.dispatcher.action
            .filter((action: Action) => this.filter(action))
            .subscribe((action: Action) => this.next(action));
    }

    destroy(): void {
        this.subject.getValue().action = null;
        this.subject.getValue().transactions = null;
        this.subscription.unsubscribe();
    }

    private filter(action: Action): boolean {
        return ActionDomain.TRANSACTION === action.domain;
    }

    private next(action: Action): void {
        this.subject.getValue().action = action;

        if (null != action.data) {

            if (ActionOperation.GET_ALL === action.operation) {
                this.subject.getValue().transactions = action.data;
            }
        }

        this.subject.next(this.subject.getValue());
    }

}

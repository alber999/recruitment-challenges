import {Injectable} from '@angular/core';
import {Store} from '../../flux/store/store';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {LoadingStorePayload} from './LoadingStorePayload';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {Dispatcher} from '../../flux/dispatcher/dispatcher';
import {Action} from '../../flux/action/action';
import {ActionDomain} from '../../flux/action/actionDomain';


@Injectable()
export class LoadingStore implements Store {

    private subject: BehaviorSubject<LoadingStorePayload> = new BehaviorSubject(new LoadingStorePayload());

    public payload: Observable<LoadingStorePayload> = this.subject.asObservable();

    private subscription: Subscription;

    constructor(private dispatcher: Dispatcher) {
        this.subscription = this.dispatcher.action
            .filter((action: Action) => this.filter(action))
            .subscribe((action: Action) => this.next(action));
    }

    destroy(): void {
        this.subject.getValue().action = null;
        this.subject.getValue().isLoading = null;
        this.subscription.unsubscribe();
    }

    private filter(action: Action): boolean {
        return ActionDomain.LOADING === action.domain;
    }

    private next(action: Action): void {
        this.subject.getValue().action = action;
        if (null != action.data) {
            this.subject.getValue().isLoading = action.data;
        }
        this.subject.next(this.subject.getValue());
    }
}

import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '../../flux/store/store';
import {NotificationStorePayload} from './NotificationStorePayload';
import {Dispatcher} from '../../flux/dispatcher/dispatcher';
import {Action} from '../../flux/action/action';
import {ActionDomain} from '../../flux/action/actionDomain';

@Injectable()
export class NotificationStore implements Store {

    private subject: BehaviorSubject<NotificationStorePayload> = new BehaviorSubject(new NotificationStorePayload());

    public payload: Observable<NotificationStorePayload> = this.subject.asObservable();

    private subscription: Subscription;

    constructor(private dispatcher: Dispatcher) {
        this.subscription = this.dispatcher.action
            .filter((action: Action) => this.filter(action))
            .subscribe((action: Action) => this.next(action));
    }

    destroy(): void {
        this.subject.getValue().notification = null;
        this.subject.getValue().action = null;
        this.subscription.unsubscribe();
    }

    private filter(action: Action): boolean {
        return ActionDomain.NOTIFICATION === action.domain;
    }

    private next(action: Action): void {
        this.subject.getValue().action = action;

        if (null != action.data) {
            this.subject.getValue().notification = action.data;
        }

        this.subject.next(this.subject.getValue());
    }
}

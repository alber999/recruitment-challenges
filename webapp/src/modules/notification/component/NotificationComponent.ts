import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {NotificationStore} from '../store/NotificationStore';
import {animate, style, transition, trigger} from '@angular/animations';
import {NotificationStorePayload} from '../store/NotificationStorePayload';
import {Observable} from 'rxjs/Observable';
import {Notification} from '../domain/Notification';
import {NotificationType} from '../domain/NotificationType';
import {NotificationActionCreator} from '../action/NotificationActionCreator';

@Component({
    selector: 'app-notification',
    styleUrls: ['./NotificationComponent.scss'],
    templateUrl: './NotificationComponent.html',
    animations: [
        trigger('slideInOut', [
            transition(':enter', [
                style({transform: 'translateY(100%)'}),
                animate('200ms ease-in', style({transform: 'translateY(0%)'}))
            ]),
            transition(':leave', [
                animate('200ms ease-in', style({transform: 'translateY(100%)'}))
            ])
        ])
    ]
})
export class NotificationComponent implements OnInit, OnDestroy {

    NotificationType: typeof NotificationType = NotificationType;
    notification: Observable<Notification>;
    class: string;

    constructor(private actionCreator: NotificationActionCreator,
                private store: NotificationStore,
                private elementRef: ElementRef) {
    }

    ngOnInit(): void {
        document.querySelector('body').appendChild(this.elementRef.nativeElement);

        this.notification =
            this.store.payload
                .filter((payload: NotificationStorePayload) => null != payload.action)
                .map((payload: NotificationStorePayload) => this.handleNotificationStorePayload(payload));
    }

    ngOnDestroy(): void {
        const that = this;
        document.querySelector('body').removeChild(that.elementRef.nativeElement);
    }

    close(e): void {
        e.preventDefault();
        this.actionCreator.clear();
    }

    handleNotificationStorePayload(payload: NotificationStorePayload): Notification {
        if (NotificationType.ERROR === payload.notification.type) {
            this.class = 'notification-error';
            return payload.notification;
        }

        return null;
    }
}

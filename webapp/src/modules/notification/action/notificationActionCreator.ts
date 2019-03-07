import {Injectable} from '@angular/core';
import {Dispatcher} from '../../flux/dispatcher/dispatcher';
import {ActionDomain} from '../../flux/action/actionDomain';
import {ActionOperation} from '../../flux/action/actionOperation';
import {NotificationType} from '../domain/notificationType';
import {Action} from '../../flux/action/action';

@Injectable()
export class NotificationActionCreator {

    private static action(type: NotificationType, status?: string, message?: string): Action {
        return {
            domain: ActionDomain.NOTIFICATION,
            operation: ActionOperation.EXECUTE,
            data: {type, status, message}
        };
    }

    constructor(private dispatcher: Dispatcher) {
    }

    error(status?: string, message?: string) {
        this.dispatcher.dispatch(NotificationActionCreator.action(NotificationType.ERROR, status, message));
    }

    clear(): void {
        this.dispatcher.dispatch(NotificationActionCreator.action(NotificationType.CLEAR));
    }
}

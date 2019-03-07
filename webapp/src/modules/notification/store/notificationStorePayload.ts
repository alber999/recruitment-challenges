import {Action} from '../../flux/action/action';
import {Notification} from '../domain/notification';

export class NotificationStorePayload {
    action: Action;
    notification: Notification;
}

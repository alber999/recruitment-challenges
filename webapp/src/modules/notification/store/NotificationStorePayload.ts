import {Action} from '../../flux/action/action';
import {Notification} from '../domain/Notification';

export class NotificationStorePayload {
    action: Action;
    notification: Notification;
}

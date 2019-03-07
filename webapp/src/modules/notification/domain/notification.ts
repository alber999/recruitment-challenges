import {NotificationType} from './notificationType';

export interface Notification {
    type: NotificationType;
    status?: number;
    message?: string;
}

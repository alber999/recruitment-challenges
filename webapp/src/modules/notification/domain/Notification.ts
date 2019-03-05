import {NotificationType} from './NotificationType';

export interface Notification {
    type: NotificationType;
    status?: number;
    message?: string;
}

import {NgModule} from '@angular/core';
import {NotificationActionCreator} from './action/notificationActionCreator';
import {NotificationComponent} from './component/notificationComponent';
import {NotificationStore} from './store/notificationStore';
import {RouterModule} from '@angular/router';
import {HttpNotificationInterceptor} from './interceptor/httpNotificationInterceptor';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
    ],
    declarations: [
        NotificationComponent
    ],
    exports: [
        NotificationComponent
    ],
    providers: [
        NotificationActionCreator,
        NotificationStore,
        HttpNotificationInterceptor
    ]
})
export class NotificationModule {
}

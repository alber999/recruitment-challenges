import {NgModule} from '@angular/core';
import {NotificationActionCreator} from './action/NotificationActionCreator';
import {NotificationComponent} from './component/NotificationComponent';
import {NotificationStore} from './store/NotificationStore';
import {RouterModule} from '@angular/router';
import {HttpNotificationInterceptor} from './interceptor/HttpNotificationInterceptor';
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

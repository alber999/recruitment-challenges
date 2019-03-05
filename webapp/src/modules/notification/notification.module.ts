import {NgModule} from '@angular/core';
import {NotificationActionCreator} from './action/NotificationActionCreator';
import {NotificationComponent} from './component/NotificationComponent';
import {NotificationStore} from './store/NotificationStore';
import {LoadingModule} from '../loading/loading.module';
import {RouterModule} from '@angular/router';
import {HttpNotificationInterceptor} from './interceptor/HttpNotificationInterceptor';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LoadingModule
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

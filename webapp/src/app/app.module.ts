import './rxjs.operators';

import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './component/appComponent';
import {FluxModule} from '../modules/flux/flux.module';
import {TransactionModule} from '../modules/transaction/transaction.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoadingModule} from '../modules/loading/loading.module';
import {HttpLoadingInterceptor} from '../modules/loading/interceptor/httpLoadingInterceptor';
import {NotificationModule} from '../modules/notification/notification.module';
import {HttpNotificationInterceptor} from '../modules/notification/interceptor/httpNotificationInterceptor';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FluxModule,
        LoadingModule,
        NotificationModule,
        TransactionModule
    ],
    providers: [
        Title,
        [
            {provide: HTTP_INTERCEPTORS, useClass: HttpLoadingInterceptor, multi: true},
            {provide: HTTP_INTERCEPTORS, useClass: HttpNotificationInterceptor, multi: true}
        ]
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {LoadingActionCreator} from './action/loadingActionCreator';
import {LoadingComponent} from './component/loadingComponent';
import {LoadingStore} from './store/loadingStore';
import {CommonModule} from '@angular/common';
import {NgxLoadingModule} from 'ngx-loading';
import {HttpLoadingInterceptor} from './interceptor/httpLoadingInterceptor';

@NgModule({
    imports: [
        CommonModule,
        NgxLoadingModule.forRoot({})
    ],
    declarations: [
        LoadingComponent
    ],
    exports: [
        LoadingComponent
    ],
    providers: [
        LoadingActionCreator,
        LoadingStore,
        HttpLoadingInterceptor
    ]
})
export class LoadingModule {
}


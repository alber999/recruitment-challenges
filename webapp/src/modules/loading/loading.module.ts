import {NgModule} from '@angular/core';
import {LoadingActionCreator} from './action/LoadingActionCreator';
import {LoadingComponent} from './component/LoadingComponent';
import {LoadingStore} from './store/LoadingStore';
import {CommonModule} from '@angular/common';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import {HttpLoadingInterceptor} from './interceptor/HttpLoadingInterceptor';

@NgModule({
    imports: [
        CommonModule,
        NgxLoadingModule.forRoot({
            animationType: ngxLoadingAnimationTypes.threeBounce,
            backdropBackgroundColour: 'rgba(0,0,0,0.2)',
            backdropBorderRadius: '4px',
            primaryColour: '#213d8f',
            secondaryColour: '#213d8f',
            tertiaryColour: '#213d8f'
        })
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


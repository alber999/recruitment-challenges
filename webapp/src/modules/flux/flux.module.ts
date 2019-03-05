import {NgModule} from '@angular/core';
import {Dispatcher} from './dispatcher/dispatcher';

@NgModule({
    providers: [
        Dispatcher
    ]
})
export class FluxModule {
}

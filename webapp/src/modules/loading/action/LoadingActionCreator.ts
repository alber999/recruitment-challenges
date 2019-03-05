import {Injectable} from '@angular/core';
import {Dispatcher} from '../../flux/dispatcher/dispatcher';
import {ActionDomain} from '../../flux/action/actionDomain';
import {ActionOperation} from '../../flux/action/actionOperation';


@Injectable()
export class LoadingActionCreator {

    constructor(private dispatcher: Dispatcher) {
    }

    loading(isLoading: boolean): void {
        this.dispatcher.dispatch({
            domain: ActionDomain.LOADING,
            operation: ActionOperation.EXECUTE,
            data: isLoading
        });
    }
}

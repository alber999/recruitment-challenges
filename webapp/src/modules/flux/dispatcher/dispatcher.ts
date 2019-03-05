import {Injectable} from '@angular/core';
import {Action} from '../action/action';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Dispatcher {

    private subject: Subject<Action> = new Subject();

    public action: Observable<Action> = this.subject.asObservable();

    dispatch(action: Action): void {
        if (null != this.action) {
            this.subject.next(action);
        }
    }
}

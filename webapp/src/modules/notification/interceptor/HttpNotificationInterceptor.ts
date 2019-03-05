import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {NotificationActionCreator} from '../action/NotificationActionCreator';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs';

@Injectable()
export class HttpNotificationInterceptor implements HttpInterceptor {

    timerSubscription: Subscription;

    constructor(private actionCreator: NotificationActionCreator) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.actionCreator.clear();
        if (null != this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
        return next
            .handle(req)
            .catch(e => {
                this.actionCreator.error(e.status, e.error.message);
                this.timerSubscription = Observable.timer(3000)
                    .subscribe(
                        () => this.actionCreator.clear(),
                        () => this.actionCreator.clear(),
                        () => {
                            if (null != this.timerSubscription) {
                                this.timerSubscription.unsubscribe();
                            }
                        });
                return Observable.throwError(e);
            });
    }
}

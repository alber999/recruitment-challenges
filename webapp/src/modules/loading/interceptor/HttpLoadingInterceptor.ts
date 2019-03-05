import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {LoadingActionCreator} from '../action/LoadingActionCreator';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {

    constructor(private actionCreator: LoadingActionCreator) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.actionCreator.loading(true);

        return next
            .handle(req)
            .do(event => {
                if (event instanceof HttpResponse) {
                    this.actionCreator.loading(false);
                }
            })
            .catch(e => {
                this.actionCreator.loading(false);
                return Observable.throwError(e);
            });
    }
}

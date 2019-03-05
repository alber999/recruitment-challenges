import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LoadingStore} from '../store/LoadingStore';
import {LoadingStorePayload} from '../store/LoadingStorePayload';


@Component({
    selector: 'app-loading',
    templateUrl: './LoadingComponent.html'
})
export class LoadingComponent implements OnInit, OnDestroy {

    loading: Observable<boolean>;

    constructor(private store: LoadingStore) {
    }

    ngOnInit(): void {
        this.loading = this.store.payload
            .filter((payload: LoadingStorePayload) => null != payload.action)
            .map((payload: LoadingStorePayload) => payload.isLoading);
    }

    ngOnDestroy(): void {
        this.store.destroy();
    }
}

import {AfterViewChecked, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LoadingStore} from '../store/loadingStore';
import {LoadingStorePayload} from '../store/loadingStorePayload';
import {ngxLoadingAnimationTypes} from 'ngx-loading';

@Component({
    selector: 'app-loading',
    templateUrl: './loadingComponent.html'
})
export class LoadingComponent implements OnInit, OnDestroy, AfterViewChecked {

    ngxLoadingAnimationTypes: typeof ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
    loading: Observable<boolean>;

    constructor(private cdRef: ChangeDetectorRef,
                private store: LoadingStore) {
    }

    ngOnInit(): void {
        this.loading = this.store.payload
            .filter((payload: LoadingStorePayload) => null != payload.action)
            .map((payload: LoadingStorePayload) => payload.isLoading);
    }

    ngOnDestroy(): void {
        this.store.destroy();
    }

    ngAfterViewChecked(): void {
        this.cdRef.detectChanges();
    }
}

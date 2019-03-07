import {async, TestBed} from '@angular/core/testing';
import {TransactionListComponent} from './transactionListComponent';
import '../../../../app/rxjs.operators';
import {TransactionActionCreator} from '../../action/transactionActionCreator';
import {TransactionStore} from '../../store/transactionStore';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {ActionDomain} from '../../../flux/action/actionDomain';
import {ActionOperation} from '../../../flux/action/actionOperation';
import {By} from '@angular/platform-browser';
import {ActionResult} from '../../../flux/action/actionResult';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const transactionActionCreatorStub: Partial<TransactionActionCreator> = {
    getAll(params?: { action?: string, currencyCode?: string }) {
    }
};

const transactionStoreStub: Partial<TransactionStore> = {
    destroy() {
    },
    payload: Observable.of({
        action: {
            domain: ActionDomain.TRANSACTION,
            operation: ActionOperation.GET_ALL,
            result: ActionResult.SUCCESS,
            data: []
        },
        transactions: []
    })
};

describe('TransactionListComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule, ReactiveFormsModule, HttpClientModule, MatTableModule],
            declarations: [
                TransactionListComponent
            ],
            providers: [
                {provide: TransactionActionCreator, useValue: transactionActionCreatorStub},
                {provide: TransactionStore, useValue: transactionStoreStub}
            ]
        }).compileComponents();
    }));

    it('should create the component', () => {
        const fixture = TestBed.createComponent(TransactionListComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should have displayedColumns defined properly', () => {
        const fixture = TestBed.createComponent(TransactionListComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component.displayedColumns).toEqual(['cardHolderName', 'brand', 'cardLast4Digits', 'type', 'amount', 'currency']);
    });

    it('should render transactions table', () => {
        const fixture = TestBed.createComponent(TransactionListComponent);
        fixture.detectChanges();

        const debugElement = fixture.debugElement.query(By.css('#transactions-table'));
        expect(debugElement).toBeTruthy();
    });
});

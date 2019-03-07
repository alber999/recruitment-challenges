import {async, TestBed} from '@angular/core/testing';
import '../../../../app/rxjs.operators';
import {TransactionActionCreator} from '../../action/transactionActionCreator';
import {FormBuilder} from '@angular/forms';
import {TransactionSearchComponent} from './transactionSearchComponent';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

const transactionActionCreatorStub: Partial<TransactionActionCreator> = {
    getAll(params?: { action?: string, currencyCode?: string }) {
    }
};

describe('TransactionSearchComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TransactionSearchComponent
            ],
            providers: [
                FormBuilder,
                {provide: TransactionActionCreator, useValue: transactionActionCreatorStub}
            ],
            schemas: [NO_ERRORS_SCHEMA]

        }).compileComponents();
    }));

    it('should create the component', () => {
        const fixture = TestBed.createComponent(TransactionSearchComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should have types defined properly', () => {
        const fixture = TestBed.createComponent(TransactionSearchComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component.types).toEqual([
            {name: 'Payment', value: 'payment'},
            {name: 'Authorize', value: 'authorize'},
            {name: 'Credit', value: 'credit'}
        ]);
    });

    it('should have currencies defined properly', () => {
        const fixture = TestBed.createComponent(TransactionSearchComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component.currencies).toEqual([
            {name: 'USD', value: 'USD'},
            {name: 'EUR', value: 'EUR'},
            {name: 'GBP', value: 'GBP'}
        ]);
    });

    it('should render type selector', () => {
        const fixture = TestBed.createComponent(TransactionSearchComponent);
        fixture.detectChanges();

        const debugElement = fixture.debugElement.query(By.css('#transaction-type-form-field'));
        expect(debugElement).toBeTruthy();
    });

    it('should render currency selector', () => {
        const fixture = TestBed.createComponent(TransactionSearchComponent);
        fixture.detectChanges();

        const debugElement = fixture.debugElement.query(By.css('#transaction-currency-form-field'));
        expect(debugElement).toBeTruthy();
    });

    it('should render search button', () => {
        const fixture = TestBed.createComponent(TransactionSearchComponent);
        fixture.detectChanges();

        const debugElement = fixture.debugElement.query(By.css('#transaction-search-button'));
        expect(debugElement).toBeTruthy();
    });
});

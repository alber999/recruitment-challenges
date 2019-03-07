import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TransactionActionCreator} from '../../action/transactionActionCreator';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-transaction-search',
    styleUrls: ['./transactionSearchComponent.scss'],
    templateUrl: './transactionSearchComponent.html',
    encapsulation: ViewEncapsulation.None,
})
export class TransactionSearchComponent implements OnInit {

    types = [
        {name: 'Payment', value: 'payment'},
        {name: 'Authorize', value: 'authorize'},
        {name: 'Credit', value: 'credit'}
    ];

    currencies = [
        {name: 'USD', value: 'USD'},
        {name: 'EUR', value: 'EUR'},
        {name: 'GBP', value: 'GBP'}
    ];

    form: FormGroup;

    constructor(
        private actionCreator: TransactionActionCreator,
        private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            type: '',
            currency: '',
        });
    }

    search(): void {
        this.actionCreator.getAll({
            action: undefined !== this.form.value.type ? this.form.value.type.value : null,
            currencyCode: undefined !== this.form.value.currency ? this.form.value.currency.value : null
        });
    }
}

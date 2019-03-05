import {NgModule} from '@angular/core';
import {TransactionListComponent} from './component/transactionListComponent';
import {TransactionService} from './service/transactionService';
import {TransactionActionCreator} from './action/TransactionActionCreator';
import {TransactionStore} from './store/transactionStore';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TransactionSearchComponent} from './component/transactionSearchComponent';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        MatButtonModule,
        MatTableModule,
        BrowserAnimationsModule
    ],
    declarations: [
        TransactionSearchComponent,
        TransactionListComponent
    ],
    exports: [
        TransactionSearchComponent,
        TransactionListComponent
    ],
    providers: [
        TransactionService,
        TransactionActionCreator,
        TransactionStore
    ]
})
export class TransactionModule {
}

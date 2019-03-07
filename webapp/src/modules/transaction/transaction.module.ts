import {NgModule} from '@angular/core';
import {TransactionListComponent} from './component/list/transactionListComponent';
import {TransactionService} from './service/transactionService';
import {TransactionActionCreator} from './action/transactionActionCreator';
import {TransactionStore} from './store/transactionStore';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatOptionModule, MatSelectModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TransactionSearchComponent} from './component/search/transactionSearchComponent';
import {TransactionComponent} from './component/transactionComponent';

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
        MatIconModule,
        BrowserAnimationsModule
    ],
    declarations: [
        TransactionComponent,
        TransactionSearchComponent,
        TransactionListComponent
    ],
    exports: [
        TransactionComponent
    ],
    providers: [
        TransactionService,
        TransactionActionCreator,
        TransactionStore
    ]
})
export class TransactionModule {
}

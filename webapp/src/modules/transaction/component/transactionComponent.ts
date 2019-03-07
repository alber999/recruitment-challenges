import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-transaction',
    templateUrl: './transactionComponent.html',
})
export class TransactionComponent implements OnInit {

    constructor(private titleService: Title) {
    }

    ngOnInit(): void {
        this.titleService.setTitle('Alberto Galiana: Transactions');
    }
}

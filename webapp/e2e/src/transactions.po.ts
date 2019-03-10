import {browser, by, element} from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getPageTitle() {
        return browser.getTitle() as Promise<string>;
    }

    getTransactionsTable() {
        return element(by.id('transactions-table')).isPresent() as Promise<boolean>;
    }

    countRowsTransactionsTable() {
        return element.all(by.css('.transaction-row')).count() as Promise<number>;
    }

    getTransactionTypeSelector() {
        return element(by.id('transaction-type-form-field')).isPresent() as Promise<boolean>;
    }

    getTransactionCurrencySelector() {
        return element(by.id('transaction-currency-form-field')).isPresent() as Promise<boolean>;
    }

    getTransactionSearchButton() {
        return element(by.id('transaction-search-button')).isPresent() as Promise<boolean>;
    }

    getNotification(className: string) {
        return element(by.css('.' + className)).isPresent() as Promise<boolean>;
    }

    searchTransaction(type: string, currency: string) {
        element(by.id('transaction-type-form-field')).click();
        element.all(by.cssContainingText('span.mat-option-text', type)).click();
        browser.waitForAngular();

        element(by.id('transaction-currency-form-field')).click();
        element.all(by.cssContainingText('span.mat-option-text', currency)).click();
        browser.waitForAngular();

        element(by.id('transaction-search-button')).click();
    }

    getFirstTransactionDetails() {
        element.all(by.css('.transaction-row')).first().click();
    }

    countTransactionDetails() {
        return element.all(by.css('div.transaction-detail:not(.hidden)')).count() as Promise<number>;
    }
}

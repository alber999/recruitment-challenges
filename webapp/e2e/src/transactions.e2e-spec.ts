import {AppPage} from './transactions.po';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
        page.navigateTo();
    });

    it('should display page title', () => {
        expect(page.getPageTitle()).toEqual('Alberto Galiana: Transactions');
    });

    it('should display transactions table', () => {
        expect(page.getTransactionsTable()).toBeTruthy();
    });

    it('should display 5 transactions', () => {
        expect(page.getRowsTransactionsTable()).toBe(5);
    });

    it('should display transactions type selector', () => {
        expect(page.getTransactionTypeSelector()).toBeTruthy();
    });

    it('should display transactions currency selector', () => {
        expect(page.getTransactionCurrencySelector()).toBeTruthy();
    });

    it('should display transactions search button', () => {
        expect(page.getTransactionSearchButton()).toBeTruthy();
    });

    it('should display 1 transaction (Credit/EUR)', () => {
        page.searchTransaction('Credit', 'EUR');
        expect(page.getRowsTransactionsTable()).toBe(1);
    });

    it('should display 2 transaction (Payment/USD)', () => {
        page.searchTransaction('Payment', 'USD');
        expect(page.getRowsTransactionsTable()).toBe(2);
    });

    it('should display error notification when trying (Authorize/GBP)', () => {
        page.searchTransaction('Authorize', 'GBP');
        expect(page.getNotification('notification-error')).toBeTruthy();
    });
});

import {Action} from '../../flux/action/action';
import {Transaction} from '../domain/transaction';

export class TransactionStorePayload {
    action: Action;
    transactions: Transaction[] = [];
}

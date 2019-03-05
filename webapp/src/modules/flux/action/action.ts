import {ActionDomain} from './actionDomain';
import {ActionOperation} from './actionOperation';
import {ActionResult} from './actionResult';

export interface Action {
    domain: ActionDomain;
    operation: ActionOperation;
    result?: ActionResult;
    data?: any;
    error?: string;
}

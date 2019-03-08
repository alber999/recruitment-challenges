import {ServiceUtil} from './ServiceUtil';
import {HttpParams} from '@angular/common/http';

describe('ServiceUtil', () => {
    it('should return null when input is null', () => {
        expect(ServiceUtil.httpOptions(null)).toEqual({});
    });

    it('should return empty when input is empty', () => {
        const httpOptions: any = ServiceUtil.httpOptions({});
        expect((httpOptions.params as HttpParams).toString()).toEqual('');
    });

    it('should remove empty params', () => {
        const httpOptions: any = ServiceUtil.httpOptions({p1: '', p2: 'hello my+friend'});
        expect((httpOptions.params as HttpParams).toString()).toEqual('p2=hello%20my%2Bfriend');
    });

    it('should return all params', () => {
        const httpOptions: any = ServiceUtil.httpOptions({p1: 'hello', p2: 'hello my+friend'});
        expect((httpOptions.params as HttpParams).toString()).toEqual('p1=hello&p2=hello%20my%2Bfriend');
    });
});

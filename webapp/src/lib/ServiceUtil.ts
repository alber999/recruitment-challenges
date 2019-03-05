import {HttpParams} from '@angular/common/http';
import {ServiceEncoder} from './ServiceEncoder';
import {ObjectUtil} from './ObjectUtil';

export class ServiceUtil {
    static httpOptions(params: object): object {
        if (null == params) {
            return {};
        }

        return {
            params: Object.getOwnPropertyNames(ObjectUtil.removeEmptyProperties(params))
                .reduce((v, k) => v.set(k, params[k]),
                    new HttpParams({fromString: '', encoder: new ServiceEncoder()}))
        };
    }
}

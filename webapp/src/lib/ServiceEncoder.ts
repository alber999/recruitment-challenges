import {HttpUrlEncodingCodec} from '@angular/common/http';

export class ServiceEncoder extends HttpUrlEncodingCodec {
    encodeKey(key: string): string {
        return encodeURI(key);
    }

    encodeValue(value: string): string {
        return encodeURIComponent(value);
    }
}

import {ObjectUtil} from './ObjectUtil';

describe('ObjectUtil', () => {
    it('should return null when input is null', () => {
        expect(ObjectUtil.removeEmptyProperties(null)).toBeNull();
    });

    it('should return empty object when input is empty object', () => {
        expect(ObjectUtil.removeEmptyProperties({})).toEqual({});
    });

    it('should return object when there are no empty properties', () => {
        const obj = {p1: 'v1', p2: 'v2'};
        expect(ObjectUtil.removeEmptyProperties(obj)).toEqual({p1: 'v1', p2: 'v2'});
    });

    it('should return object without null properties', () => {
        const obj = {p1: 'v1', p2: null};
        expect(ObjectUtil.removeEmptyProperties(obj)).toEqual({p1: 'v1'});
    });

    it('should return object without empty properties', () => {
        const obj = {p1: 'v1', p2: ''};
        expect(ObjectUtil.removeEmptyProperties(obj)).toEqual({p1: 'v1'});
    });
});

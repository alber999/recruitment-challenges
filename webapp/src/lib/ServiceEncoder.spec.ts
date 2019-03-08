import {ServiceEncoder} from './ServiceEncoder';

describe('ServiceEncoder', () => {
    const serviceEncoder = new ServiceEncoder();

    describe('encodeKey', () => {
        it('should return the same key', () => {
            expect(serviceEncoder.encodeKey('x')).toBe('x');
        });

        it('should return encoded key', () => {
            expect(serviceEncoder.encodeKey('hi my+friend')).toBe('hi%20my+friend');
        });
    });

    describe('encodeValue', () => {
        it('should return the same value', () => {
            expect(serviceEncoder.encodeValue('x')).toBe('x');
        });

        it('should return encoded value', () => {
            expect(serviceEncoder.encodeValue('hi my+friend')).toBe('hi%20my%2Bfriend');
        });
    });
});

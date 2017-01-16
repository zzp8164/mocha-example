import PrimeFactors from '../src/PrimeFactors';
import { expect, assert } from 'chai';

describe('Array', () => {
    describe('#indexOf()', () => {
        it('should return -1 when the value is not present', () => {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});

describe('primes', () => {
    it('should return empty when 1', () => {
        expect(new PrimeFactors().generate(1)).to.be.empty;
    });
});
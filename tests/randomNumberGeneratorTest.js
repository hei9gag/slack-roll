import { expect } from 'chai';
import RandomNumberGenerator from '../utils/randomGenerator';

describe('Received a random number generator request', () => {
  describe('When lower bound is greater than upper bound', () => {
    it('Generator should return null', () => {
      const result = RandomNumberGenerator.generate(10, 1);
      expect(result).to.be.a('null');
    });
  });
});

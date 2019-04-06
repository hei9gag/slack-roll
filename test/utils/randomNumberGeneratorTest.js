import { expect } from 'chai';
import RandomNumberGenerator from '../../utils/randomGenerator';

describe('Received a random number generator request', () => {
  describe('When lower bound is greater than upper bound', () => {
    it('should return null', () => {
      const result = RandomNumberGenerator.generate(10, 1);
      expect(result).to.be.a('null');
    });
  });

  describe('When lower bound and upper bound are inputted', () => {
    it('should return a random number within the range', () => {
      const result = RandomNumberGenerator.generate(1, 10);
      expect(result).to.be.greaterThan(0);
      expect(result).to.be.lessThan(11);
    });
  });
});

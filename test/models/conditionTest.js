import { expect } from 'chai';
import Condition from '../../models/condition';

describe('Create Condition model', () => {
  it('should return a new Condition', () => {
    // city, region, country, lat, long
    const model = new Condition('Mostly Clear', 33, 76);
    expect(model.text).to.be.equals('Mostly Clear');
    expect(model.code).to.be.equals(33);
    expect(model.temperature).to.be.equals(76);
  });
});

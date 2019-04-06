import { expect } from 'chai';
import Astronomy from '../../models/astronomy';

describe('Create Astronomy model', () => {
  it('should return a new Astronomy', () => {
    const model = new Astronomy('6.12am', '6.40pm');
    expect(model.sunrise).to.be.equals('6.12am');
    expect(model.sunset).to.be.equals('6.40pm');
  });
});

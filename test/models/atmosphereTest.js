import { expect } from 'chai';
import Atmosphere from '../../models/atmosphere';

describe('Create Atmosphere model', () => {
  it('should return a new Atmosphere', () => {
    const model = new Atmosphere(79, 10, 29.71, 0);
    expect(model.humidity).to.be.equals(79);
    expect(model.visibility).to.be.equals(10);
    expect(model.pressure).to.be.equals(29.71);
    expect(model.rising).to.be.equals(0);
  });
});

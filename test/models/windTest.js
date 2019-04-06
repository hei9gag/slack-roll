import { expect } from 'chai';
import Wind from '../../models/wind';

describe('Create Wind model', () => {
  it('should return a new wind', () => {
    // city, region, country, lat, long
    const model = new Wind(76, 270, 4.97);
    expect(model.chill).to.be.equals(76);
    expect(model.direction).to.be.equals(270);
    expect(model.speed).to.be.equals(4.97);
  });
});

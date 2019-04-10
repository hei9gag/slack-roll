import { expect } from 'chai';
import Location from '../../models/location';

describe('Create Location model', () => {
  it('should return a new Location', () => {
    // city, region, country, lat, long
    const model = new Location('Hong Kong', 'HK', 'Hong Kong', 22.283319, 114.158722);
    expect(model.city).to.be.equals('Hong Kong');
    expect(model.region).to.be.equals('HK');
    expect(model.country).to.be.equals('Hong Kong');
    expect(model.lat).to.be.equals(22.283319);
    expect(model.long).to.be.equals(114.158722);
  });
});

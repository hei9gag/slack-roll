import { expect } from 'chai';
import CurrentWeather from '../../models/currentWeather';

describe('Create CurrentWeather model', () => {
  it('should return a new CurrentWeather', () => {
    // city, region, country, lat, long
    const model = new CurrentWeather('Mostly Clear', 33, 76);
    expect(model.text).to.be.equals('Mostly Clear');
    expect(model.code).to.be.equals(33);
    expect(model.temperature).to.be.equals(76);
  });
});

describe('Get weather description', () => {
  it('should decode the int value and returns cooresponding string', () => {
    const model = new CurrentWeather('Mostly Clear', 33, 76);
    expect(model.getWeatherDescription()).to.be.equals('fair (night)');
  });
});

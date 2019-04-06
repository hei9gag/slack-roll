import { expect } from 'chai';
import ForecastWeather from '../../models/forecastWeather';

describe('Create ForecastWeather model', () => {
  it('should return a new ForecastWeather', () => {
    const model = new ForecastWeather('Fri', 1554393600, 71, 78, 'Mostly Sunny', 34);
    expect(model.day).to.be.equals('Fri');
    expect(model.date).to.be.equals(1554393600);
    expect(model.low).to.be.equals(71);
    expect(model.high).to.be.equals(78);
    expect(model.text).to.be.equals('Mostly Sunny');
    expect(model.code).to.be.equals(34);
  });
});

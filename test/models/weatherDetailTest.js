import { expect } from 'chai';
import WeatherDetail from '../../models/weatherDetail';

describe('Create weather detail model', () => {
  it('should return a new Weather Detail', () => {
    const model = new WeatherDetail('HK', 'Sunny', 'Forecasts');
    expect(model.location).to.be.equals('HK');
    expect(model.currentWeather).to.be.equals('Sunny');
    expect(model.forecasts).to.be.equals('Forecasts');
  });
});

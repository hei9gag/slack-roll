import { expect } from 'chai';
import yahooWeatherApi from '../../network/weather/yahooWeatherApi';

describe('Send request to fetch weather info', () => {
  it('should return weather json', async () => {
    const result = await yahooWeatherApi.fetchWeatherByLocation('hongkong');
    expect(result).to.be.not.a('null');
  });
});

import { expect } from 'chai';
import yahooWeatherApi from '../../network/weather/yahooWeatherApi';

describe('Send request to fetch weather info', () => {
  it('should return weather json', (done) => {
    const result = yahooWeatherApi.fetchWeatherByLocation('hongkong');
    result.then((data) => {
      expect(data).to.be.not.a('null');
      done();
    });
  });
});

import { expect } from 'chai';
import YahooWeatherApi from '../../network/weather/yahooWeatherApi';

describe('Send request to fetch weather info', () => {
  it('should return weather json', (done) => {
    const result = YahooWeatherApi.fetchWeatherByLocation('hongkong');
    result.then((data) => {
      expect(data).to.be.not.a('null');
      done();
    });
  });
});

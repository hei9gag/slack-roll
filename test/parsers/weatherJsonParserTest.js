import { expect } from 'chai';
import fs from 'fs';
import parse from '../../parsers/weatherJsonParser';

describe('Load weather json', () => {
  it('should parse the json file and returns weather model', () => {
    const jsonData = fs.readFileSync('test/resources/weather.json');
    const weather = JSON.parse(jsonData);
    const weatherDetail = parse(jsonData);
    const { location } = weather;
    expect(weatherDetail.location.city).to.be.equals(location.city);
    expect(weatherDetail.location.region).to.be.equals(location.region);
    expect(weatherDetail.location.country).to.be.equals(location.country);
    expect(weatherDetail.location.lat).to.be.equals(location.lat);
    expect(weatherDetail.location.long).to.be.equals(location.long);

    const {
      wind,
      atmosphere,
      astronomy
    } = weather.current_observation;

    expect(weatherDetail.currentWeather.wind.chill).to.be.equals(wind.chill);
    expect(weatherDetail.currentWeather.astronomy.sunrise).to.be.equals(astronomy.sunrise);
    expect(weatherDetail.currentWeather.atmosphere.humidity).to.be.equals(atmosphere.humidity);
    expect(weatherDetail.forecasts.length).to.be.equals(10);
  });
});

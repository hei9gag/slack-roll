import { expect } from 'chai';
import fs from 'fs';
import parse from '../../parsers/weatherJsonParser';

describe('Load weather json', () => {
  it('should parse the json file and returns weather model', () => {
    const jsonData = fs.readFileSync('test/resources/weather.json');
    const weather = JSON.parse(jsonData);
    const weatherDetail = parse(jsonData);
    const { location } = weather;
    expect(weatherDetail.city).to.be.equals(location.city);
    expect(weatherDetail.region).to.be.equals(location.region);
    expect(weatherDetail.country).to.be.equals(location.country);
    expect(weatherDetail.lat).to.be.equals(location.lat);
    expect(weatherDetail.long).to.be.equals(location.long);

    const {
      wind,
      atmosphere,
      astronomy
    } = weather.current_observation;

    expect(weatherDetail.wind.chill).to.be.equals(wind.chill);
    expect(weatherDetail.astronomy.sunrise).to.be.equals(astronomy.sunrise);
    expect(weatherDetail.atmosphere.humidity).to.be.equals(atmosphere.humidity);
    expect(weatherDetail.length).to.be.equals(10);
  });
});

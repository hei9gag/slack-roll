import fs from 'fs';
import { expect } from 'chai';
import CurrentWeather from '../../models/currentWeather';
import parse from '../../parsers/weatherJsonParser';
import WeatherDetail from '../../models/weatherDetail';

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

describe('Get weather emoji', () => {
  it('should return the description emoji', () => {
    const model = new CurrentWeather('Mostly Clear', 33, 76);
    expect(model.getWeatherEmoji()).to.be.equals(':sunny:');
  });
});

describe('Receive a weather detail json', () => {
  it('Should returns a WeatherDetail object', () => {
    const jsonData = fs.readFileSync('test/resources/weather.json');
    const weatherDetailData = JSON.parse(jsonData);
    const weatherDetail = WeatherDetail.fromJson(weatherDetailData);
    const { location } = weatherDetailData;
    expect(weatherDetail.location.city).to.be.equals(location.city);
    expect(weatherDetail.location.region).to.be.equals(location.region);
    expect(weatherDetail.location.country).to.be.equals(location.country);
    expect(weatherDetail.location.lat).to.be.equals(location.lat);
    expect(weatherDetail.location.long).to.be.equals(location.long);
    expect(weatherDetail.currentWeather.getWeatherEmoji).to.be.not.a('undefined');
  });
});

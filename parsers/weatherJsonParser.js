import Location from '../models/location';
import Wind from '../models/wind';
import Astronomy from '../models/astronomy';
import Atmosphere from '../models/atmosphere';
import CurrentWeather from '../models/currentWeather';
import ForecastWeather from '../models/forecastWeather';
import WeatherDetail from '../models/weatherDetail';

const parse = (weatherJson) => {
  const weather = JSON.parse(weatherJson);
  const { location } = weather;
  const locationModel = new Location(
    location.city,
    location.region,
    location.country,
    location.lat,
    location.long
  );

  const {
    wind,
    atmosphere,
    astronomy,
    condition
  } = weather.current_observation;
  const windModel = new Wind(wind.chill, wind.direction, wind.speed);
  const atmosphereModel = new Atmosphere(
    atmosphere.humidity,
    atmosphere.visibility,
    atmosphere.preesure,
    atmosphere.rising
  );
  const astronomyModel = new Astronomy(astronomy.sunrise, astronomy.sunset);
  const currentWeather = new CurrentWeather(
    condition.text,
    condition.code,
    condition.temperature,
    windModel,
    atmosphereModel,
    astronomyModel
  );

  const { forecasts } = weather;
  const forecastWeathers = forecasts.map(forecast => new ForecastWeather(
    forecast.day,
    forecast.date,
    forecast.low,
    forecast.high,
    forecast.text,
    forecast.code
  ));

  const weatherDetail = new WeatherDetail(
    locationModel,
    currentWeather,
    forecastWeathers
  );

  return weatherDetail;
};

export default parse;

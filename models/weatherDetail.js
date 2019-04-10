import CurrentWeather from './currentWeather';
import Location from './location';
import ForecastWeather from './forecastWeather';

class WeatherDetail {
  constructor(location, currentWeather, forecasts) {
    this.location = location;
    this.currentWeather = currentWeather;
    this.forecasts = forecasts;
  }

  static fromJson = (json) => {
    const { currentWeather, location, forecasts } = json;
    const weatherDetail = Object.assign(new WeatherDetail(), json);
    weatherDetail.currentWeather = Object.assign(new CurrentWeather(), currentWeather);
    weatherDetail.location = Object.assign(new Location(), location);
    // eslint-disable-next-line max-len
    weatherDetail.forecasts = forecasts.map(forecast => Object.assign(new ForecastWeather(), forecast));
    return weatherDetail;
  }
}

export default WeatherDetail;

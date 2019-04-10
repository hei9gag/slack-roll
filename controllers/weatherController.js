import axios from 'axios';
import yahooWeatherApi from '../network/weather/yahooWeatherApi';
import parser from '../parsers/weatherJsonParser';
import CacheManager, { WEATHER_CACHE_KEY } from '../utils/cacheManager';

const WEATHER_CACHE_TIME = 3600;

class WeatherController {
  fetchWeather = (req, res) => {
    // eslint-disable-next-line camelcase
    const { response_url } = req.body;
    this.retrieveWeatherDetail()
      .then(weatherDetail => this.sendWeatherResponse(response_url, weatherDetail));
    return res.status(200).send({
      response_type: 'in_channel'
    });
  };

  buildWeatherString = (weatherDetail) => {
    const { currentWeather } = weatherDetail;
    const { wind, atmosphere, astronomy } = currentWeather;
    const weatherStr = `*Weather:* ${currentWeather.text}${currentWeather.getWeatherEmoji()}\n*Temperature:* ${currentWeather.temperature}°C\n*Humidity:* ${atmosphere.humidity}%\n*Visibility:* ${atmosphere.visibility}km\n*Wind Speed:* ${wind.speed}km/h\n*Sunset:* ${astronomy.sunset}`;
    return weatherStr;
  }

  sendWeatherResponse = (reponseUrl, weatherDetail) => {
    if (!reponseUrl || !weatherDetail) {
      return;
    }
    const weatherResponseStr = this.buildWeatherString(weatherDetail);
    axios.post(reponseUrl, {
      response_type: 'in_channel',
      text: weatherResponseStr
    }).catch((error) => {
      // TODO: try other logging library instead of using console.log
      // eslint-disable-next-line no-console
      console.log(`[Weather] send weather request error: ${error}`);
    });
  }

  retrieveWeatherDetail = () => new Promise((resolve, reject) => {
    CacheManager.getJsonValue(WEATHER_CACHE_KEY)
      .then((result) => {
        if (result == null) {
          return yahooWeatherApi.fetchWeatherByLocation()
            .then((weatherJson) => {
              const weatherDetail = parser(weatherJson);
              CacheManager.setJsonValue(WEATHER_CACHE_KEY, WEATHER_CACHE_TIME, weatherDetail);
              resolve(weatherDetail);
            });
        }
        return resolve(result);
      })
      .catch(err => reject(err));
  })
}

const weatherController = new WeatherController();
export default weatherController;

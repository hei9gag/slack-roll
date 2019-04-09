import axios from 'axios';
import yahooWeatherApi from '../network/weather/yahooWeatherApi';
import parser from '../parsers/weatherJsonParser';

class WeatherController {
  fetchWeather = (req, res) => {
    // eslint-disable-next-line camelcase
    const { response_url } = req.body;
    yahooWeatherApi.fetchWeatherByLocation('hongkong')
      .then((weatherJson) => {
        const weatherDetail = parser(weatherJson);
        this.sendWeatherResponse(response_url, weatherDetail);
      });
    return res.status(200).send({
      response_type: 'in_channel'
    });
  }

  buildWeatherString = (weatherDetail) => {
    const { currentWeather } = weatherDetail;
    const { wind, atmosphere, astronomy } = currentWeather;
    const weatherStr = `*Weather:* ${currentWeather.text}${currentWeather.getWeatherEmoji()}\n*Temperature:* ${currentWeather.temperature}°C\n*Humidity:* ${atmosphere.humidity}%\n*Visibility:* ${atmosphere.visibility}km\n*Wind Speed:* ${wind.speed}km/h\n*Sunset:* ${astronomy.sunset}`;
    return weatherStr;
  }

  sendWeatherResponse = (reponseUrl, weatherDetail) => {
    const weatherResponseStr = this.buildWeatherString(weatherDetail);
    axios.post(reponseUrl, {
      response_type: 'in_channel',
      text: weatherResponseStr
    });
  }
}

const weatherController = new WeatherController();
export default weatherController;

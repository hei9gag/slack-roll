import yahooWeatherApi from '../network/weather/yahooWeatherApi';
import parser from '../parsers/weatherJsonParser';

class WeatherController {
  fetchWeather = (req, res) => {
    // eslint-disable-next-line camelcase
    const { response_url } = req.body;
    yahooWeatherApi.fetchWeatherByLocation('hongkong')
      .then((weatherJson) => {
        const weatherDetail = parser(weatherJson);
        const weatherResponseStr = this.buildWeatherString(weatherDetail);
        return res.status(200).send({
          response_type: 'in_channel',
          text: weatherResponseStr
        });
      });
  }

  buildWeatherString = (weatherDetail) => {
    const { currentWeather } = weatherDetail;
    const { wind, atmosphere, astronomy } = currentWeather;
    const weatherStr = `*Temperature:* ${currentWeather.temperature}\n*Humidity:* ${atmosphere.humidity}`;
    return weatherStr;
  }
}

const weatherController = new WeatherController();
export default weatherController;

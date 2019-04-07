import yahooWeatherApi from '../network/weather/yahooWeatherApi';
import parser from '../parsers/weatherJsonParser';

class WeatherController {
  fetchWeather = (req, res) => {
    // eslint-disable-next-line camelcase
    const { response_url } = req.body;
    yahooWeatherApi.fetchWeatherByLocation('hongkong')
      .then((weatherJson) => {
        const weatherDetail = parser(weatherJson);
        return res.status(200).send({
          response_type: 'in_channel',
          data: weatherDetail
        });
      });
  }
}

const weatherController = new WeatherController();
export default weatherController;

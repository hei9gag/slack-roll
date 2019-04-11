import weatherClient from './yahooWeatherClient';

class YahooWeatherApi {
  static baseUrl = 'https://weather-ydn-yql.media.yahoo.com';

  constructor() {
    this.client = weatherClient;
  }

  fetchWeatherByLocation = async (location = 'hongkong') => {
    const requestUrl = `${YahooWeatherApi.baseUrl}/forecastrss?location=${location}&format=json&u=c`;
    let weatherData = null;
    try {
      const response = await this.client.execute(requestUrl);
      const { data } = response;
      weatherData = data;
    }
    catch (error) {
      // eslint-disable-next-line no-console
      console.log(`[YahooWeatherApi] error:${error}`);
    }
    return weatherData;
  }
}

const weatherApi = new YahooWeatherApi();
export default weatherApi;

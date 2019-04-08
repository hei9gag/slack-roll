import weatherClient from './yahooWeatherClient';

class YahooWeatherApi {
  static baseUrl = 'https://weather-ydn-yql.media.yahoo.com';

  constructor() {
    this.client = weatherClient;
  }

  fetchWeatherByLocation = (location) => {
    const requestUrl = `${YahooWeatherApi.baseUrl}/forecastrss?location=${location}&format=json&u=c`;
    const result = this.client.execute(requestUrl);
    return result
      .then((response) => {
        const { data } = response;
        return data;
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(`[YahooWeatherApi] error:${error}`);
      });
  }
}

const weatherApi = new YahooWeatherApi();
export default weatherApi;

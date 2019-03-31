import weatherClient from './yahooWeatherClient';

class YahooWeatherApi {
  static baseUrl = 'https://weather-ydn-yql.media.yahoo.com';

  constructor() {
    this.client = weatherClient;
  }

  fetchWeatherByLocation = (location) => {
    const requestUrl = `${YahooWeatherApi.baseUrl}/forecastrss?location=${location}&format=json`;
    const result = this.client.execute(requestUrl);
    result.then((response) => {
      console.log(`response:${response.data}`);
    }).catch((error) => {
      console.log(`error:${error}`);
    });
  }
}

const weatherApi = new YahooWeatherApi();
export default weatherApi;

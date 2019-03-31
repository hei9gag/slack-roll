import weatherClient from './yahooWeatherClient';

class YahooWeatherApi {
  static baseUrl = 'https://weather-ydn-yql.media.yahoo.com/';

  constructor() {
    this.client = weatherClient;
  }

  fetchWeatherByLocation = async (location) => {
    const requestUrl = `${this.baseUrl}/forecastrss?location=${location}&format=json`;
    const result = await this.client.fetchWeatherByLocation(requestUrl);
    console.log(`fetchWeatherByLocation result:${JSON.stringify(result)}`);
  }
}

const weatherApi = new YahooWeatherApi();
export default weatherApi;

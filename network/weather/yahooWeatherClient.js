import OAuth from 'oauth';

class YahooWeatherClient {
  static baseUrl = 'https://weather-ydn-yql.media.yahoo.com/';

  constructor(appId, clientId, clientSecret) {
    this.appId = appId;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.header = {
      'X-Yahoo-App-Id': this.appId
    };
    this.request = new OAuth.OAuth(
      null,
      null,
      this.clientId,
      this.clientSecret,
      '1.0',
      null,
      'HMAC-SHA1',
      null,
      this.header
    );
  }

  fetchLocationWeather = (location) => {
    const requestUrl = `${this.baseUrl}/forecastrss?location=${location}&format=json`;
    console.log('requestUrl:' + requestUrl);
    this.request.get(
      requestUrl,
      null,
      null,
      (err, data, result) => {
        if (err) {
          console.log(err);
        }
        else {
          console.log(data);
        }
      }
    );
  }
}

const yahooWeatherController = new YahooWeatherClient();
export default yahooWeatherController;

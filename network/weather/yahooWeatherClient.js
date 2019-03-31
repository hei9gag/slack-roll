import OAuth from 'oauth';

class YahooWeatherClient {
  constructor() {
    this.appId = process.env.YAHOO_WEATHER_APP_ID;

    if (this.appId === undefined) {
      // eslint-disable-next-line no-console
      console.error('Missing app Id');
    }

    this.clientId = process.env.YAHOO_WEATHER_CLIENT_ID;

    if (this.clientId === undefined) {
      // eslint-disable-next-line no-console
      console.error('Missing client Id');
    }

    this.clientSecret = process.env.YAHOO_WEATHER_CLIENT_SECRET;

    if (this.clientSecret === undefined) {
      // eslint-disable-next-line no-console
      console.error('Missing client secret');
    }

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

  execute = async (requestUrl) => {
    this.request.get(
      requestUrl,
      null,
      null,
      (err, data, result) => new Promise((resolve, reject) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.log(`[Weather] Failed to execute url:${err}`);
          reject(err);
        }
        else {
          resolve({ data, result });
        }
      })
    );
  }
  // fetchLocationWeather = (location) => {
  //   const requestUrl = `${this.baseUrl}/forecastrss?location=${location}&format=json`;
  //   // console.log('requestUrl:' + requestUrl);
  //   this.request.get(
  //     requestUrl,
  //     null,
  //     null,
  //     (err, data, result) => {
  //       if (err) {
  //         console.log(err);
  //       }
  //       else {
  //         console.log(data);
  //       }
  //     }
  //   );
  // }
}

const yahooWeatherController = new YahooWeatherClient();
export default yahooWeatherController;

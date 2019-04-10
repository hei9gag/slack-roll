import OAuth from 'oauth';
import dotenv from 'dotenv';

dotenv.config({ path: 'config/.env' });

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

  execute = requestUrl => new Promise((resolve, reject) => {
    this.request.get(
      requestUrl,
      null,
      null,
      (err, data, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve({ data, result });
        }
      }
    );
  })
}
const yahooWeatherClient = new YahooWeatherClient();
export default yahooWeatherClient;

import { expect } from 'chai';
import dotenv from 'dotenv';
import yahooWeatherClient from '../../network/weather/yahooWeatherClient';

dotenv.config({ path: 'config/.env' });

describe('Sending network request to weather client', () => {
  it('should create the client instance with valid client config', () => {
    const { appId, clientId, clientSecret } = yahooWeatherClient;
    expect(appId).to.be.equals(process.env.YAHOO_WEATHER_APP_ID);
    expect(clientId).to.be.equals(process.env.YAHOO_WEATHER_CLIENT_ID);
    expect(clientSecret).to.be.equals(process.env.YAHOO_WEATHER_CLIENT_SECRET);
  });
});

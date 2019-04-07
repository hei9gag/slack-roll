import request from 'supertest';
import { expect } from 'chai';
import { WEATHER_END_POINT } from '../../routes/weatherRouter';

const apiRequest = request('http://localhost:5000');

describe('Send a GET to /api/v1/weather', () => {
  describe('Fetch weather info', () => {
    it('Should fetch weather and returns weather detail model', (done) => {
      apiRequest
        .get(WEATHER_END_POINT)
        .set('Accept', 'application/json')
        .expect(200)
        .then((response) => {
          expect(response.body.data).not.to.be.a('null');
          done();
        });
    });
  });
});

import request from 'supertest';
import { WEATHER_END_POINT } from '../../routes/weatherRouter';

const apiRequest = request('http://localhost:5000');

describe('Send a GET to /api/v1/weather', () => {
  describe('Fetch weather info', () => {
    it('Should fetch weather and response OK', (done) => {
      apiRequest
        .post(WEATHER_END_POINT)
        .set('Accept', 'application/json')
        .expect(200)
        .end((err) => {
          if (err) return done(err);
          return done();
        });
    });
  });
});

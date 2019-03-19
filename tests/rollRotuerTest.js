import request from 'supertest';
import { ROLL_END_POINT } from '../routes/rollRouter';

const apiRequest = request('http://localhost:5000');

describe('Send a POST to /api/v1/roll', () => {
  it('Should generate a random number within lower bound and upper bound value', (done) => {
    apiRequest
      .post(ROLL_END_POINT)
      .send({ text: '0 100' })
      .set('Accept', 'application/json')
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });

  it('Should generate a random number within 0 and upper bound value', (done) => {
    apiRequest
      .post(ROLL_END_POINT)
      .send({ text: '100' })
      .set('Accept', 'application/json')
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});

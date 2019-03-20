import request from 'supertest';
import { ROLL_END_POINT } from '../routes/rollRouter';

const apiRequest = request('http://localhost:5000');

describe('Send a POST to /api/v1/roll', () => {
  describe('With lower bound and upper bound parameters', () => {
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
  });

  describe('With upper bound parameters', () => {
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

  describe('With more than 2 parameters', () => {
    it('Should generate a random number using the first 2 parameters as lower bound and upper bound', (done) => {
      apiRequest
        .post(ROLL_END_POINT)
        .send({ text: '0 100 1000' })
        .set('Accept', 'application/json')
        .expect(200)
        .end((err) => {
          if (err) return done(err);
          return done();
        });
    });
  });

  describe('Without parameters', () => {
    it('Should generate a random number within 0 and 100', (done) => {
      apiRequest
        .post(ROLL_END_POINT)
        .set('Accept', 'application/json')
        .expect(200)
        .end((err) => {
          if (err) return done(err);
          return done();
        });
    });
  });
});

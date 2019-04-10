import { expect } from 'chai';
import CacheManager from '../../utils/cacheManager';

// const client = redis.createClient();

describe('Send a key value to redis', () => {
  it('Should store the key into redis', (done) => {
    const size = {
      width: 800,
      height: 600
    };
    const cacheResult = CacheManager.setJsonValue('TEST', 3600, size);
    // eslint-disable-next-line no-unused-expressions
    expect(cacheResult).to.be.true;
    CacheManager.getJsonValue('TEST')
      .then((result) => {
        expect(result.width).to.be.equals(size.width);
        expect(result.height).to.be.equals(size.height);
        done();
      });
  });
});

describe('Put a key value to redis with and the value will be expiry after 1 second', () => {
  it('Should return null for the key', (done) => {
    const size = {
      width: 800,
      height: 600
    };
    const cacheResult = CacheManager.setJsonValue('TEST', 1, size);
    // eslint-disable-next-line no-unused-expressions
    expect(cacheResult).to.be.true;
    setTimeout(() => {
      CacheManager.getJsonValue('TEST')
        .then((result) => {
          expect(result).to.be.a('null');
          done();
        });
    }, 1500);
  });
});

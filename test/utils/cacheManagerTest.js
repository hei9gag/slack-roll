import { expect } from 'chai';
import CacheManager from '../../utils/cacheManager';

// const client = redis.createClient();

describe('Send a key value to redis', () => {
  it('Should store the key into redis', async () => {
    const size = {
      width: 800,
      height: 600
    };
    const cacheResult = CacheManager.setJsonValue('TEST', 3600, size);
    // eslint-disable-next-line no-unused-expressions
    expect(cacheResult).to.be.true;
    const result = await CacheManager.getJsonValue('TEST');
    expect(result.width).to.be.equals(size.width);
    expect(result.height).to.be.equals(size.height);
  });
});

describe('Put a key value to redis with and the value will be expiry after 1 second', () => {
  it('Should return null for the key', async () => {
    const size = {
      width: 800,
      height: 600
    };
    const cacheResult = CacheManager.setJsonValue('TEST', 1, size);
    // eslint-disable-next-line no-unused-expressions
    expect(cacheResult).to.be.true;
    setTimeout(async () => {
      const result = await CacheManager.getJsonValue('TEST');
      expect(result).to.be.a('null');
    }, 1500);
  });
});

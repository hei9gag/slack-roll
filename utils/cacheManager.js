import redis from 'redis';

export const WEATHER_CACHE_KEY = 'WEATHER_CACHE_KEY';

const client = redis.createClient();

// Redis errors to the console
client.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.log(`Error: ${err}`);
});

class CacheManager {
  // eslint-disable-next-line arrow-body-style
  static setJsonValue = (key, timestamp, json) => {
    return client.set(key, JSON.stringify(json), 'EX', timestamp);
  }

  static getJsonValue = async key => new Promise((resolve, reject) => {
    client.get(key, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(JSON.parse(result));
    });
  })
}

export default CacheManager;

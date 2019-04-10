const emojiMap = {
  0: ':tornado:',
  1: ':thunder_cloud_and_rain:',
  2: ':tornado:',
  3: ':thunder_cloud_and_rain:',
  4: ':thunder_cloud_and_rain:',
  5: ':rain_cloud:',
  6: ':rain_cloud:',
  7: ':rain_cloud:',
  8: ':partly_sunny_rain:',
  9: ':partly_sunny_rain:',
  10: ':rain_cloud:',
  11: ':rain_cloud:',
  12: ':rain_cloud:',
  13: ':snow_cloud:',
  14: ':snow_cloud:',
  15: ':snow_cloud:',
  16: ':snow_cloud:',
  17: ':foggy:',
  18: ':foggy:',
  19: ':foggy:',
  20: ':foggy:',
  21: ':foggy:',
  22: ':foggy:',
  23: ':wind_blowing_face:',
  24: ':wind_blowing_face:',
  25: ':snowman:',
  26: ':sun_small_cloud:',
  27: ':sun_small_cloud:',
  28: ':sun_small_cloud:',
  29: ':sun_small_cloud:',
  30: ':sun_small_cloud:',
  31: ':sunny:',
  32: ':sunny:',
  33: ':sunny:',
  34: ':sunny:',
  35: ':rain_cloud:',
  36: ':sunny:',
  37: ':thunder_cloud_and_rain:',
  38: ':thunder_cloud_and_rain:',
  39: ':thunder_cloud_and_rain:',
  40: ':rain_cloud:',
  41: ':snow_cloud:',
  42: ':snow_cloud:',
  43: ':snowman:',
  44: ':sun_small_cloud:',
  45: ':thunder_cloud_and_rain:',
  46: ':snow_cloud:',
  47: ':thunder_cloud_and_rain:',
  3200: ''
};

const codeMap = {
  0: 'tornado',
  1: 'tropical storm',
  2: 'hurricane',
  3: 'severe thunderstorms',
  4: 'thunderstorms',
  5: 'mixed rain and snow',
  6: 'mixed rain and sleet',
  7: 'mixed snow and sleet',
  8: 'freezing drizzle',
  9: 'drizzle',
  10: 'freezing rain',
  11: 'showers',
  12: 'showers',
  13: 'snow flurries',
  14: 'light snow showers',
  15: 'blowing snow',
  16: 'snow',
  17: 'hail',
  18: 'sleet',
  19: 'dust',
  20: 'foggy',
  21: 'haze',
  22: 'smoky',
  23: 'blustery',
  24: 'windy',
  25: 'cold',
  26: 'cloudy',
  27: 'mostly cloudy (night)',
  28: 'mostly cloudy (day)',
  29: 'partly cloudy (night)',
  30: 'partly cloudy (day)',
  31: 'clear (night)',
  32: 'sunny',
  33: 'fair (night)',
  34: 'fair (day)',
  35: 'mixed rain and hail',
  36: 'hot',
  37: 'isolated thunderstorms',
  38: 'scattered thunderstorms',
  39: 'scattered thunderstorms',
  40: 'scattered showers',
  41: 'heavy snow',
  42: 'scattered snow showers',
  43: 'heavy snow',
  44: 'partly cloudy',
  45: 'thundershowers',
  46: 'snow showers',
  47: 'isolated thundershowers',
  3200: 'not available'
};

export const mapToDescription = code => codeMap[code] || codeMap[3200];

export const mapToEmoji = code => emojiMap[code] || '';

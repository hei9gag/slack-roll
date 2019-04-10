import { mapToDescription, mapToEmoji } from '../utils/decodeWeatherHelper';

class CurrentWeather {
  constructor(text, code, temperature, wind, atmosphere, astronomy) {
    this.text = text;
    this.code = code;
    this.temperature = temperature;
    this.wind = wind;
    this.atmosphere = atmosphere;
    this.astronomy = astronomy;
  }

  getWeatherDescription = () => mapToDescription(this.code)

  getWeatherEmoji = () => mapToEmoji(this.code)
}

export default CurrentWeather;

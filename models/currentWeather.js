import decode from '../utils/decodeWeatherHelper';

class CurrentWeather {
  constructor(text, code, temperature, wind, atmosphere, astronomy) {
    this.text = text;
    this.code = code;
    this.temperature = temperature;
    this.wind = wind;
    this.atmosphere = atmosphere;
    this.astronomy = astronomy;
  }

  getWeatherDescription = () => decode(this.code)
}

export default CurrentWeather;

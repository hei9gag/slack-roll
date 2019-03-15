

class RandomNumberGenerator {
  static isValidInput = (lowerBound, upperBound) => {
    if (!lowerBound || !upperBound) {
      return false;
    }
    return lowerBound < upperBound;
  }

  static generate = (lowerBound, upperBound) => {
    const lower = lowerBound;
    const upper = upperBound;

    if (!this.isValidInput(lower, upper)) {
      return null;
    }

    const range = upper - lower;
    return Math.floor(Math.random() * range) + lower;
  }
}

export default RandomNumberGenerator;

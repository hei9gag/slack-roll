class RandomNumberGenerator {
  static isValidInput = (lowerBound, upperBound) => {
    if (lowerBound === null
        || upperBound === null
        || !Number.isInteger(lowerBound)
        || !Number.isInteger(upperBound)) {
      return false;
    }
    return lowerBound < upperBound;
  }

  static generate = (lowerBound, upperBound) => {
    const lower = parseInt(lowerBound, 10);
    const upper = parseInt(upperBound, 10);
    if (!this.isValidInput(lower, upper)) {
      return null;
    }

    const range = upper - lower;
    return Math.floor(Math.random() * range) + lower;
  }
}

export default RandomNumberGenerator;

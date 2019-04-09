import { expect } from 'chai';
import { mapToDescription, mapToEmoji } from '../../utils/decodeWeatherHelper';

describe('Received a weather code', () => {
  describe('Get weather description', () => {
    it('Should return weather description based on the code', () => {
      let result = mapToDescription(4700);
      expect(result).to.be.equals('not available');

      result = mapToDescription(0);
      expect(result).to.be.equals('tornado');
    });
  });

  describe('Get weather emoji', () => {
    it('Should return weather emoji', () => {
      let result = mapToEmoji(0);
      expect(result).to.be.equals(':tornado:');

      result = mapToEmoji(9999);
      expect(result).to.be.equals('');
    });
  });
});

import { expect } from 'chai';
import decode from '../../utils/decodeWeatherHelper';

describe('Received a weather code', () => {
  it('should decode the code and returns cooresponding message', () => {
    let result = decode(4700);
    expect(result).to.be.equals('not available');

    result = decode(0);
    expect(result).to.be.equals('tornado');
  });
});

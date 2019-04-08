import RandomNumberGenerator from '../utils/randomGenerator';

class RollController {
    rollARandomNumber = (req, res) => {
      // eslint-disable-next-line camelcase
      const { response_url, text } = req.body;
      let lowerBound = 0;
      let upperBound = 100;

      if (text) {
        const splitedStrings = text.split(' ');
        if (!this.isValidInputFormat(splitedStrings)) {
          return res.status(200).send(
            {
              response_type: 'in_channel',
              text: 'Invalid input format.'
            }
          );
        }

        if (splitedStrings.length === 1) {
          const upperBoundValue = splitedStrings[0];
          upperBound = upperBoundValue;
        }
        else if (splitedStrings.length === 2) {
          const lowerBoundValue = splitedStrings[0];
          const upperBoundValue = splitedStrings[1];
          lowerBound = lowerBoundValue;
          upperBound = upperBoundValue;
        }
      }
      const result = RandomNumberGenerator.generate(lowerBound, upperBound);
      // this.sendRequest(response_url);
      return res.status(200).send({
        response_type: 'in_channel',
        text: (result) ? `Your random number is ${result}` : 'Invalid input format'
      });
    }

    isValidInputFormat = splitedString => splitedString.length <= 2
}

const rollController = new RollController();
export default rollController;

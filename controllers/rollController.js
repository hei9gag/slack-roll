import RandomNumberGenerator from '../utils/randomGenerator';

class RollController {
    rollARandomNumber = (req, res) => {
      const { text } = req.body;
      let lowerBound = 0;
      let upperBound = 100;

      if (text) {
        const splitedStrings = text.split(' ');
        if (!this.isValidInputFormat(splitedStrings)) {
          return res.status(200).send(
            {
              response_type: 'ephemeral',
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
      return res.status(200).send(
        {
          response_type: 'ephemeral',
          text: (result) ? `Your rolling number is ${result}` : 'Invalid input format'
        }
      );
    }

    isValidInputFormat = splitedString => splitedString.length <= 2
}

const rollController = new RollController();
export default rollController;

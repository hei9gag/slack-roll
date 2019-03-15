import RandomNumberGenerator from '../utils/randomGenerator';

class RollController {
    rollARandomNumber = (req, res) => {
      console.log('AAA' + RandomNumberGenerator.helloWorld());
      res.status(200).send(
        {
          response_type: 'ephemeral',
          text: 'Hello World'
        }
      );
    }
}

const rollController = new RollController();
export default rollController;

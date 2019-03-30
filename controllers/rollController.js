import RandomNumberGenerator from '../utils/randomGenerator';

class RollController {
    rollARandomNumber = (req, res) => {
      // example input
      /*
      req:{
        "token":"saV9Tv8iP8bBiLqdbiXyXCrG",
        "team_id":"TH19Z6JEA",
        "team_domain":"zuhlkehk",
        "channel_id":"CGXEHAK8Q",
        "channel_name":"general",
        "user_id":"UH06UQDTP",
        "user_name":"brian.chung",
        "command":"/roll","text":"",
        "response_url":"https://hooks.slack.com/commands/TH19Z6JEA/595083220103/imIxVOjIlPrHvLKia9ahISWo","trigger_id":"593979297364.579339222486.1fa6c03a1f94d25cc63aa853b468032a"}
      */
      const { text } = req.body;
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
      return res.status(200).send(
        {
          response_type: 'in_channel',
          text: (result) ? `Your random number is ${result}` : 'Invalid input format'
        }
      );
    }

    isValidInputFormat = splitedString => splitedString.length <= 2
}

const rollController = new RollController();
export default rollController;

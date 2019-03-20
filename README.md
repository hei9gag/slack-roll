# Slack Command: Roll a random number
A simple command to generate a random number and send to slack.

**/roll**
The command will generate a random number (0 to 100 by default).

**/roll 200**
You can update the upper bound value by passing one parameter. It will generate a random number between 0 to 200

**/roll 1 10**
By passing two paraneters you can control the lower bound and upper bound. So it will generate a number between 1 to 10

# Setup Environment
1. Install node js (brew install node)
2. Run npm install
2. Use your favourite IDE to open the project
3. Run **npm run start** to launch the app. Use **npm run dev** for local development. Use **npm run test** to run the test case.

# Debug Locally
1. Please install ngrok (https://ngrok.com/)
2. Then run the command ngrok http 5000
3. ngrok will generate a URL and you can test the service through Postman or paste the URL in the slack command config
import express from 'express';
import bodyParser from 'body-parser';
import createError from 'http-errors';
import dotenv from 'dotenv';
import rollRouter, { ROLL_END_POINT } from './routes/rollRouter';
import weatherRouter, { WEATHER_END_POINT } from './routes/weatherRouter';

dotenv.config({ path: 'config/.env' });

// Set up the express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ROLL_END_POINT, rollRouter);
app.use(WEATHER_END_POINT, weatherRouter);

app.get('*', (req, res) => {
  var err = createError(
    404, 'Invalid endpoint.', { success: 'false' }
  );
  res.send(err);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

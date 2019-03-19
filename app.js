import express from 'express';
import bodyParser from 'body-parser';
import createError from 'http-errors';
import rollRouter, { ROLL_END_POINT } from './routes/rollRouter';

// Set up the express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ROLL_END_POINT, rollRouter);

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

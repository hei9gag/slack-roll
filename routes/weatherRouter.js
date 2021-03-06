import express from 'express';
import weatherController from '../controllers/weatherController';

const router = express.Router();
export const WEATHER_END_POINT = '/api/v1/weather';

router.post('/', weatherController.fetchWeather);

export default router;

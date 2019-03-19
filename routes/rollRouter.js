import express from 'express';
import RollController from '../controllers/rollController';

const router = express.Router();

export const ROLL_END_POINT = '/api/v1/roll';

router.get('/', RollController.rollARandomNumber);
router.post('/', RollController.rollARandomNumber);

export default router;

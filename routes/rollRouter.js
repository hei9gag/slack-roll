import express from 'express';
import RollController from '../controllers/rollController';

const router = express.Router();

router.get('/', RollController.rollARandomNumber);
router.post('/', RollController.rollARandomNumber);

export default router;

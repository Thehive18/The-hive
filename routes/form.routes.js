import express from 'express';
import { saveForm, subscribe} from '../controllers/sumitSubscribe.controller.js';

const router = express.Router();

router.post('/submit-form', saveForm);
router.post('/subscribe', subscribe);

export default router

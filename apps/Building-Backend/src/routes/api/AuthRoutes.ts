import express from 'express';
import AuthController from '../../controllers/AuthController';

const router = express.Router();

router.get('/login', AuthController.login);

router.use('/auth', router);

export { router as authRouter };

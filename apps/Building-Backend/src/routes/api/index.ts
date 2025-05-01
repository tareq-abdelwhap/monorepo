import express from 'express';
import { AppError } from '../../utils/AppError';
import { authRouter } from './AuthRoutes';

const router = express.Router();

router.use(authRouter);

router.use('/api', router);

// 404 not found route error handler
router.all('*', (req, res, next) => {
  throw new AppError(`${req.originalUrl} Not Found`, 404);
});

export default router;

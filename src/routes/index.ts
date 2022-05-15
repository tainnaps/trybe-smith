import { Router } from 'express';
import productRouter from './product';
import userRouter from './user';
import orderRouter from './order';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);

export default router;

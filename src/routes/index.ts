import { Router } from 'express';
import productRouter from './product';
import userRouter from './user';
import orderRouter from './order';
import loginRouter from './login';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);
router.use('/login', loginRouter);

export default router;

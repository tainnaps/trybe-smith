import { Router } from 'express';
import OrderController from '../controllers/order';
import validateToken from '../middlewares/auth';
import validateOrder from '../middlewares/order';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAll.bind(orderController));
router.post(
  '/',
  validateToken,
  validateOrder,
  orderController.create.bind(orderController),
);

export default router;

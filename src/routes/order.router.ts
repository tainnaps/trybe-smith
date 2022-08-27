import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import validateToken from '../middlewares/auth.middleware';
import validateOrder from '../middlewares/order.middleware';

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

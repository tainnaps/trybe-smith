import { Router } from 'express';
import ProductController from '../controllers/product';

const router = Router();

const productController = new ProductController();

router.get('/', productController.getAll.bind(productController));

export default router;

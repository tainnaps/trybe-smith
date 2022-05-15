import { Router } from 'express';
import ProductController from '../controllers/product';
import validateProduct from '../middlewares/product';

const router = Router();

const productController = new ProductController();

router.get('/', productController.getAll.bind(productController));
router.post('/', validateProduct, productController.create.bind(productController));

export default router;

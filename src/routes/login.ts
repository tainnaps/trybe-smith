import { Router } from 'express';
import UserController from '../controllers/user';
import validateLogin from '../middlewares/login';

const router = Router();

const userController = new UserController();

router.post('/', validateLogin, userController.login.bind(userController));

export default router;

import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateUser from '../middlewares/user.middleware';

const router = Router();

const userController = new UserController();

router.post('/', validateUser, userController.create.bind(userController));

export default router;

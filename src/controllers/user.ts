import { Request, Response, NextFunction } from 'express';
import UserService from '../services/user';

class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { username, classe, level, password } = req.body;
      const token = await this.service.create({ username, classe, level, password });

      res.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;

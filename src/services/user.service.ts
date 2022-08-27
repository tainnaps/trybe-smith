import UserModel from '../models/user.model';
import { INewUser, IUserLogin } from '../interfaces/user.interface';
import generateToken from '../helpers/generateToken';
import UnauthorizedError from '../errors/unauthorized.error';

class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async create(user: INewUser): Promise<string> {
    const { username, id } = await this.model.create(user);
    const token = generateToken(username, id);

    return token;
  }

  public async login(user: IUserLogin): Promise<string> {
    const registeredUser = await this.model.login(user);

    if (!registeredUser) {
      throw new UnauthorizedError('Username or password invalid');
    }

    const token = generateToken(registeredUser.username, registeredUser.id);

    return token;
  }
}

export default UserService;

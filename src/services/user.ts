import UserModel from '../models/user';
import { INewUser } from '../interfaces/user';
import generateToken from '../helpers/generateToken';

class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async create(user: INewUser): Promise<string> {
    const { username } = await this.model.create(user);
    const token = generateToken(username);

    return token;
  }
}

export default UserService;

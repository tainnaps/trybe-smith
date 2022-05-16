export interface IUserLogin {
  username: string;
  password: string;
}

export interface INewUser extends IUserLogin {
  classe: string;
  level: number;
}

export interface IUser extends INewUser {
  id: number;
}

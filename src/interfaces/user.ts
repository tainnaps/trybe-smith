export interface INewUser {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface IUser extends INewUser {
  id: number;
}

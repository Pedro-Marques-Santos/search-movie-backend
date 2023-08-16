import { IUser } from "../model";

interface ICreateUser {
  id: string;
  recommend?: string[];
}

interface IFindById {
  id: string;
}

interface IModifyUserAddRecommend {
  user: IUser;
  recommend?: string[];
}

export { ICreateUser, IFindById, IModifyUserAddRecommend };

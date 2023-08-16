import { IUser } from "../../model";

interface IModifyUserAddRecommend {
  id: string;
  recommend: string[];
}

interface IUserRepository {
  teste(): string;
  createUser({ id, recommend }: IUser): Promise<IUser>;
  findById(id: string): Promise<IUser>;
  modifyUserAddRecommend({
    id,
    recommend,
  }: IModifyUserAddRecommend): Promise<IUser>;
}

export { IUserRepository };

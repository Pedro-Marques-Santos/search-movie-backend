import { IUser, User } from "../model";
import { IUserRepository } from "./implemantation/IUserRepository";

interface IModifyUserAddRecommend {
  id: string;
  recommend: string[];
}

class UserRepository implements IUserRepository {
  async modifyUserAddRecommend({
    id,
    recommend,
  }: IModifyUserAddRecommend): Promise<IUser> {
    const filter = { id: id };
    const update = { recommend: recommend };

    const newUser = await User.findOneAndUpdate(filter, update, { new: true });

    return newUser;
  }

  async findById(id: string): Promise<IUser> {
    const user = await User.findOne<IUser>({ id: id }).exec();
    return user;
  }

  async createUser({ id, recommend }: IUser): Promise<IUser> {
    const user = new User({
      id: id,
      recommend: recommend,
    });
    const userResult = await user.save();

    return userResult;
  }

  teste() {
    return "funcionou";
  }
}

export { UserRepository };

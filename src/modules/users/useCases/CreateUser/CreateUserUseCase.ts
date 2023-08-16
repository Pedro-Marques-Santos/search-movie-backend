import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/implemantation/IUserRepository";
import { AppError } from "../../../../errors/AppErrors";
import { IUser } from "../../model";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ id, recommend }: IUser): Promise<IUser> {
    const userexist = await this.userRepository.findById(id);

    if (userexist) {
      return userexist;
    }

    const user = await this.userRepository.createUser({ id, recommend });

    return user;
  }
}

export { CreateUserUseCase };

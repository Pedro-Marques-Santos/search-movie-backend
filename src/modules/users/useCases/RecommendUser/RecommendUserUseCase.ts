import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/implemantation/IUserRepository";
import { response } from "express";
import { AppError } from "../../../../errors/AppErrors";

@injectable()
class RecommendUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ id, recommend }) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError("Usuário não existe!", 404);
    }

    const newUser = await this.userRepository.modifyUserAddRecommend({
      id,
      recommend,
    });

    return newUser;
  }
}

export { RecommendUserUseCase };

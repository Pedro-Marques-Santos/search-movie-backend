import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/implemantation/IUserRepository";

@injectable()
class TesteUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(): Promise<string> {
    const teste = this.userRepository.teste();

    return teste;
  }
}

export { TesteUserUseCase };

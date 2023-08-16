import { container } from "tsyringe";
import { IUserRepository } from "../modules/users/repositories/implemantation/IUserRepository";
import { UserRepository } from "../modules/users/repositories/UserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

import { Response, Request } from "express";

import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { id, recommend } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const user = await createUserUseCase.execute({ id, recommend });

    return response.json({ user });
  }
}

export { CreateUserController };

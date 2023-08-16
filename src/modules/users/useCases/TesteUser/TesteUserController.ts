import { container } from "tsyringe";

import { Request, Response } from "express";
import { TesteUserUseCase } from "./TesteUserUseCase";

class TesteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const testeUseCase = container.resolve(TesteUserUseCase);
    const teste = await testeUseCase.execute();

    return response.json({ teste });
  }
}

export { TesteUserController };

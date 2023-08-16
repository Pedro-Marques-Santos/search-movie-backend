import { Request, Response } from "express";

import { container } from "tsyringe";
import { RecommendUserUseCase } from "./RecommendUserUseCase";

class RecommendUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, recommend } = request.body;

    const recommendUserUseCase = container.resolve(RecommendUserUseCase);

    const newUser = await recommendUserUseCase.execute({ id, recommend });

    return response.json(newUser);
  }
}

export { RecommendUserController };

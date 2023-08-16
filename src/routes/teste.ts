import { Router } from "express";
import { TesteUserController } from "../modules/users/useCases/TesteUser/TesteUserController";

const testeUseRouter = Router();

const testeUseController = new TesteUserController();

testeUseRouter.post("/", (request, response) => {
  return testeUseController.handle(request, response);
});

export { testeUseRouter };

import { Router } from "express";
import { RecommendUserController } from "../modules/users/useCases/RecommendUser/RecommendUserController";

const modifyUserAddRecommendRoutes = Router();

const recommendUserController = new RecommendUserController();

modifyUserAddRecommendRoutes.post("/", (request, response) => {
  return recommendUserController.handle(request, response);
});

export { modifyUserAddRecommendRoutes };

import { Router } from "express";
import { verifyAuthenticationRoutes } from "./verifyAuthenticationRoutes";
import { testeUseRouter } from "./teste";
import { createUserRoutes } from "./createUserRoutes";
import { modifyUserAddRecommendRoutes } from "./modifyUserAddRecommendRoutes";

const router = Router();

router.use("/verifyGoogleAuthentication", verifyAuthenticationRoutes);
router.use("/teste", testeUseRouter);
router.use("/createuser", createUserRoutes);
router.use("/modifyUserAddRecommend", modifyUserAddRecommendRoutes);

export { router };

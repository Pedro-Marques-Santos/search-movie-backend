import { Router } from "express";
import { googleAuthentication } from "../middlewares/googleAuthentication";

const verifyAuthenticationRoutes = Router();

verifyAuthenticationRoutes.post(
  "/",
  googleAuthentication,
  (request, response) => {
    return response.status(201).send();
  }
);

export { verifyAuthenticationRoutes };

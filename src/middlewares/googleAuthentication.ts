import { NextFunction, Request, Response } from "express";
import admin from "firebase-admin";
import { AppError } from "../errors/AppErrors";

export async function googleAuthentication(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const bearertoken = request.headers.authorization;

  const [, token] = bearertoken.split(" ");

  if (!token) {
    throw new AppError("invalid token", 404);
  }

  try {
    const result = await admin.auth().verifyIdToken(token);

    next();
  } catch (e) {
    throw new AppError("invalid token", 404);
  }
}

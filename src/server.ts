import { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import cors from "cors";
import "./shared/index";
import express from "express";
import { router } from "./routes";
import { AppError } from "./errors/AppErrors";
import { connectToDatabase } from "./database";

connectToDatabase();

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(router);

var admin = require("firebase-admin");

var serviceAccount = require("../firebase");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(9999, () => {
  console.log(`${process.env.PROJECT_NAME}`);
});

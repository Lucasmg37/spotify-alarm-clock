import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import swaggerUi from "swagger-ui-express";

import "express-async-errors";

import { AppError } from "./errors/AppError";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";
import "./shared/container";
import "./crons";

const app = express();
app.set("port", process.env.PORT || 3333);

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
      next();
    }

    console.log("❌", err);
    return response.status(500).json({
      status: "error",
      message: `Internal server error: ${err.message}`,
    });
  }
);

const port = app.get("port");

app.listen(port, () => {
  console.log("Server started on port 3000");
});

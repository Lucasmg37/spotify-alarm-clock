import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const [, token] = authHeader.split(" ");

    if (token) {
      try {
        const { sub: user_id } = verify(token, "secret") as IPayload;
        req.user = {
          id: user_id,
        };
        return next();
      } catch {
        throw new AppError("Token is invalid.", 401);
      }
    }
    throw new AppError("Token is missing.", 401);
  }
  throw new AppError("Not authenticated.", 401);
}

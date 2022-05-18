import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { CallbackUseCase } from "./CallbackUseCase";

class CallbackController {
  async handle(req: Request, res: Response): Promise<void> {
    const code = req.query?.code.toString() || null;

    if (!code) {
      throw new AppError("Auth with spotify failed", 400);
    }

    const callbackUseCase = container.resolve(CallbackUseCase);
    const accessToken = await callbackUseCase.execute(code);

    return res.redirect(
      `${process.env.FRONTEND_AUTH_PAGE}?access_token=${accessToken}`
    );
  }
}

export { CallbackController };

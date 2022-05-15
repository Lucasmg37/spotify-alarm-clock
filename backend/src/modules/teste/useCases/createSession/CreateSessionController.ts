import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSessionUseCase } from "./CreateSessionUseCase";

class CreateSessionController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createSessionUseCase = container.resolve(CreateSessionUseCase);

    const { name, password } = req.body;
    const data = await createSessionUseCase.execute({ name, password });
    return res.status(200).send(data);
  }
}

export { CreateSessionController };

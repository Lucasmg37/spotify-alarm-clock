import { Request, Response } from "express";

import { CreateTesteUseCase } from "./CreateTesteUseCase";

class CreateTesteController {
  constructor(private createTesteUseCase: CreateTesteUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name } = req.body;
    const data = this.createTesteUseCase.execute({ name });
    return res.status(200).send(data);
  }
}

export { CreateTesteController };

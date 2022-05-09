import { Request, Response } from "express";

import { CreateTesteUseCase } from "./CreateTesteUseCase";

class CreateTesteController {
  constructor(private createTesteUseCase: CreateTesteUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    const data = await this.createTesteUseCase.execute({ name });
    return res.status(200).send(data);
  }
}

export { CreateTesteController };

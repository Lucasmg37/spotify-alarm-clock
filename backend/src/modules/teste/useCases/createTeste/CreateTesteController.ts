import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTesteUseCase } from "./CreateTesteUseCase";

class CreateTesteController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createTesteUseCase = container.resolve(CreateTesteUseCase);

    const { name } = req.body;
    const data = await createTesteUseCase.execute({ name });
    return res.status(200).send(data);
  }
}

export { CreateTesteController };

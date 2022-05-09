import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetTesteUseCase } from "./GetTesteUseCase";

class GetTesteController {
  async handle(req: Request, res: Response): Promise<Response> {
    const getTesteUseCase = container.resolve(GetTesteUseCase);
    const data = await getTesteUseCase.execute();
    return res.status(200).send(data);
  }
}

export { GetTesteController };

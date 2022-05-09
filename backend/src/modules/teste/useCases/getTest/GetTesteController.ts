import { Request, Response } from "express";

import { GetTesteUseCase } from "./GetTesteUseCase";

class GetTesteController {
  constructor(private getTesteUseCase: GetTesteUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const data = await this.getTesteUseCase.execute();
    return res.status(200).send(data);
  }
}

export { GetTesteController };

import { Request, Response } from "express";

import { GetTesteUseCase } from "./GetTesteUseCase";

class GetTesteController {
  constructor(private getTesteUseCase: GetTesteUseCase) {}

  handle(req: Request, res: Response): Response {
    const data = this.getTesteUseCase.execute();
    return res.status(200).send(data);
  }
}

export { GetTesteController };

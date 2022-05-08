import { Request, Response } from "express";

import { ImportTesteUseCase } from "./ImportTesteUseCase";

class ImportTesteController {
  constructor(private importTesteUseCase: ImportTesteUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;
    const data = await this.importTesteUseCase.execute(file);
    return res.status(200).send(data);
  }
}

export { ImportTesteController };

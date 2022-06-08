import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportTesteUseCase } from "./ImportTesteUseCase";

class ImportTesteController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;

    const importTesteUseCase = container.resolve(ImportTesteUseCase);

    const data = await importTesteUseCase.execute(file);
    return res.status(200).send(data);
  }
}

export { ImportTesteController };

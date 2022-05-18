import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { TypeSearch } from "../../dtos/ISearch.DTO";
import { SearchUseCase } from "./SearchUseCase";

class SearchController {
  async handle(req: Request, res: Response): Promise<Response> {
    const searchParam = req.query.q;
    const type = (req.query.type as TypeSearch) || TypeSearch.TRACK;

    if (!searchParam) {
      throw new AppError("Search param is required", 400);
    }

    if (Array.isArray(searchParam)) {
      throw new AppError("Search param is invalid", 400);
    }

    const searchUseCase = container.resolve(SearchUseCase);
    const result = await searchUseCase.execute({
      search: searchParam as string,
      type,
    });

    return res.status(200).send(result);
  }
}

export { SearchController };

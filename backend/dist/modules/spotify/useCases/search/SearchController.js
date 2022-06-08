"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchController = void 0;

var _tsyringe = require("tsyringe");

var _AppError = require("../../../../errors/AppError");

var _ISearch = require("../../dtos/ISearch.DTO");

var _SearchUseCase = require("./SearchUseCase");

class SearchController {
  async handle(req, res) {
    const searchParam = req.query.q;
    const type = req.query.type || _ISearch.TypeSearch.TRACK;

    if (!searchParam) {
      throw new _AppError.AppError("Search param is required", 400);
    }

    if (Array.isArray(searchParam)) {
      throw new _AppError.AppError("Search param is invalid", 400);
    }

    const searchUseCase = _tsyringe.container.resolve(_SearchUseCase.SearchUseCase);

    const result = await searchUseCase.execute({
      search: searchParam,
      type
    });
    return res.status(200).send(result);
  }

}

exports.SearchController = SearchController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportTesteController = void 0;

var _tsyringe = require("tsyringe");

var _ImportTesteUseCase = require("./ImportTesteUseCase");

class ImportTesteController {
  async handle(req, res) {
    const {
      file
    } = req;

    const importTesteUseCase = _tsyringe.container.resolve(_ImportTesteUseCase.ImportTesteUseCase);

    const data = await importTesteUseCase.execute(file);
    return res.status(200).send(data);
  }

}

exports.ImportTesteController = ImportTesteController;
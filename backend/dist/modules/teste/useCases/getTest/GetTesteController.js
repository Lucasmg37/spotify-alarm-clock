"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetTesteController = void 0;

var _tsyringe = require("tsyringe");

var _GetTesteUseCase = require("./GetTesteUseCase");

class GetTesteController {
  async handle(req, res) {
    const getTesteUseCase = _tsyringe.container.resolve(_GetTesteUseCase.GetTesteUseCase);

    const data = await getTesteUseCase.execute();
    return res.status(200).send(data);
  }

}

exports.GetTesteController = GetTesteController;
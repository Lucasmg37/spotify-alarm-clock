"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTesteController = void 0;

var _tsyringe = require("tsyringe");

var _CreateTesteUseCase = require("./CreateTesteUseCase");

class CreateTesteController {
  async handle(req, res) {
    const createTesteUseCase = _tsyringe.container.resolve(_CreateTesteUseCase.CreateTesteUseCase);

    const {
      name,
      password
    } = req.body;
    const data = await createTesteUseCase.execute({
      name,
      password
    });
    return res.status(200).send(data);
  }

}

exports.CreateTesteController = CreateTesteController;
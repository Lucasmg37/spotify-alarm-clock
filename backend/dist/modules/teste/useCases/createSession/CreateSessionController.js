"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSessionController = void 0;

var _tsyringe = require("tsyringe");

var _CreateSessionUseCase = require("./CreateSessionUseCase");

class CreateSessionController {
  async handle(req, res) {
    const createSessionUseCase = _tsyringe.container.resolve(_CreateSessionUseCase.CreateSessionUseCase);

    const {
      name,
      password
    } = req.body;
    const data = await createSessionUseCase.execute({
      name,
      password
    });
    return res.status(200).send(data);
  }

}

exports.CreateSessionController = CreateSessionController;
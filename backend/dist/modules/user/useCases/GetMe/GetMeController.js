"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetMeController = void 0;

var _tsyringe = require("tsyringe");

var _GetMeUseCase = require("./GetMeUseCase");

class GetMeController {
  async handle(req, res) {
    const {
      user
    } = req;

    const getMeUseCase = _tsyringe.container.resolve(_GetMeUseCase.GetMeUseCase);

    const userData = await getMeUseCase.execute(user.id);
    return res.send(userData);
  }

}

exports.GetMeController = GetMeController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CallbackController = void 0;

var _tsyringe = require("tsyringe");

var _AppError = require("../../../../errors/AppError");

var _CallbackUseCase = require("./CallbackUseCase");

class CallbackController {
  async handle(req, res) {
    const code = req.query?.code.toString() || null;

    if (!code) {
      throw new _AppError.AppError("Auth with spotify failed", 400);
    }

    const callbackUseCase = _tsyringe.container.resolve(_CallbackUseCase.CallbackUseCase);

    const accessToken = await callbackUseCase.execute(code);
    return res.redirect(`${process.env.FRONTEND_AUTH_PAGE}?access_token=${accessToken}`);
  }

}

exports.CallbackController = CallbackController;
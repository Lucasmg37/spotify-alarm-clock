"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetDevicesController = void 0;

var _tsyringe = require("tsyringe");

var _GetDevicesUseCase = require("./GetDevicesUseCase");

class GetDevicesController {
  async handle(req, res) {
    const {
      user
    } = req;

    const getDevicesUseCase = _tsyringe.container.resolve(_GetDevicesUseCase.GetDevicesUseCase);

    const devices = await getDevicesUseCase.execute(user.id);
    return res.send(devices);
  }

}

exports.GetDevicesController = GetDevicesController;
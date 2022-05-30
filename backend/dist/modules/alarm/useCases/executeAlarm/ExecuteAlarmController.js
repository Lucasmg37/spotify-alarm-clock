"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExecuteAlarmController = void 0;

var _tsyringe = require("tsyringe");

var _ExecuteAlarmUseCase = require("./ExecuteAlarmUseCase");

class ExecuteAlarmController {
  async handle() {
    const executeAlarmUseCase = _tsyringe.container.resolve(_ExecuteAlarmUseCase.ExecuteAlarmUseCase);

    await executeAlarmUseCase.execute();
  }

}

exports.ExecuteAlarmController = ExecuteAlarmController;
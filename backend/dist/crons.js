"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "cron", {
  enumerable: true,
  get: function () {
    return _nodeCron.default;
  }
});

var _nodeCron = _interopRequireDefault(require("node-cron"));

var _ExecuteAlarmController = require("./modules/alarm/useCases/executeAlarm/ExecuteAlarmController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const executeAlarmController = new _ExecuteAlarmController.ExecuteAlarmController();

_nodeCron.default.schedule("* * * * *", () => {
  console.log(`⏲️ Executando tarefa ${new Date().toString()}`);
  executeAlarmController.handle();
});
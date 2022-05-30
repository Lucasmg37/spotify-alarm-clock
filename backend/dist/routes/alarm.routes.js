"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alarmRoutes = void 0;

var _express = require("express");

var _CreateAlarmController = require("../modules/alarm/useCases/createAlarm/CreateAlarmController");

const alarmRoutes = (0, _express.Router)();
exports.alarmRoutes = alarmRoutes;
const createAlarm = new _CreateAlarmController.CreateAlarmController();
alarmRoutes.post("/", createAlarm.handle);
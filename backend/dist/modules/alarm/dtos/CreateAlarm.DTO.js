"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateAlarmDTO = void 0;

class CreateAlarmDTO {
  constructor() {
    this.uuid = void 0;
    this.userUuid = void 0;
    this.name = void 0;
    this.time = void 0;
    this.repeat = void 0;
    this.weekDays = void 0;
    this.endAt = void 0;
    this.active = void 0;
    this.alarmMedia = void 0;
    this.alarmDevice = void 0;
    this.nextAlarmDate = void 0;
  }

}

exports.CreateAlarmDTO = CreateAlarmDTO;
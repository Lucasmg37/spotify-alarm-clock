"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlarmCallsRepository = void 0;

var _dataSource = require("../../../data-source");

var _AlarmCalls = require("../entities/AlarmCalls");

class AlarmCallsRepository {
  constructor() {
    this.repository = void 0;
    this.repository = _dataSource.AppDataSource.getRepository(_AlarmCalls.AlarmCalls);
  }

  async create(alarmCall) {
    const alarmEntity = this.repository.create(alarmCall);
    return this.repository.save(alarmEntity);
  }

  async getLastByAlarm(alarmUuid) {
    const alarms = await this.repository.findOne({
      where: {
        alarmUuid
      },
      order: {
        createdAt: "DESC"
      }
    });
    return alarms;
  }

}

exports.AlarmCallsRepository = AlarmCallsRepository;
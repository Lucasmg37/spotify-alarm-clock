"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlarmRepository = void 0;

var _dataSource = require("../../../../data-source");

var _Alarm = require("../entities/Alarm");

class AlarmRepository {
  constructor() {
    this.repository = void 0;
    this.repository = _dataSource.AppDataSource.getRepository(_Alarm.Alarm);
  }

  async create(alarm) {
    const {
      weekDays,
      ...alarmData
    } = alarm;
    const alarmEntity = this.repository.create({ ...alarmData
    });
    alarmEntity.setWeekDays(weekDays);
    return this.repository.save(alarmEntity);
  }

  async getValidAlarms() {
    const alarms = await this.repository.find({
      where: {
        active: true
      },
      relations: ["alarmMedia", "alarmDevice"]
    });
    return alarms;
  }

}

exports.AlarmRepository = AlarmRepository;
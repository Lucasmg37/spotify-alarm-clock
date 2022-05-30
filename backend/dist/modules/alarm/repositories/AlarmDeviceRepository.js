"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlarmDeviceRepository = void 0;

var _dataSource = require("../../../../data-source");

var _AlarmDevice = require("../entities/AlarmDevice");

class AlarmDeviceRepository {
  constructor() {
    this.repository = void 0;
    this.repository = _dataSource.AppDataSource.getRepository(_AlarmDevice.AlarmDevice);
  }

  async create(alarmDevice) {
    const alarmDeviceEntity = this.repository.create(alarmDevice);
    return this.repository.save(alarmDeviceEntity);
  }

}

exports.AlarmDeviceRepository = AlarmDeviceRepository;
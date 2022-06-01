"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateAlarmUseCase = void 0;

var _tsyringe = require("tsyringe");

var _AlarmUtils = require("../../../../utils/AlarmUtils");

var _IAlarmDeviceRepository = require("../../repositories/interfaces/IAlarmDeviceRepository");

var _IAlarmMediaRepository = require("../../repositories/interfaces/IAlarmMediaRepository");

var _IAlarmRepository = require("../../repositories/interfaces/IAlarmRepository");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;

let CreateAlarmUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("AlarmRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("AlarmMediaRepository")(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)("AlarmDeviceRepository")(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IAlarmRepository.IAlarmRepository === "undefined" ? Object : _IAlarmRepository.IAlarmRepository, typeof _IAlarmMediaRepository.IAlarmMediaRepository === "undefined" ? Object : _IAlarmMediaRepository.IAlarmMediaRepository, typeof _IAlarmDeviceRepository.IAlarmDeviceRepository === "undefined" ? Object : _IAlarmDeviceRepository.IAlarmDeviceRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class CreateAlarmUseCase {
  constructor(alarmRepository, alarmMediaRepository, alarmDeviceRepository) {
    this.alarmRepository = alarmRepository;
    this.alarmMediaRepository = alarmMediaRepository;
    this.alarmDeviceRepository = alarmDeviceRepository;
  }

  async execute(data) {
    const {
      alarm
    } = data;

    const nextAlarmDate = _AlarmUtils.AlarmUtils.getNextAlarm(alarm.time, alarm.repeat, alarm.weekDays);

    const alarmMedia = await this.alarmMediaRepository.create(alarm.alarmMedia);
    const alarmDevice = await this.alarmDeviceRepository.create(alarm.alarmDevice);
    const alarmCreated = await this.alarmRepository.create({ ...alarm,
      nextAlarmDate,
      alarmDevice,
      alarmMedia
    });
    return alarmCreated;
  }

}) || _class) || _class) || _class) || _class) || _class) || _class);
exports.CreateAlarmUseCase = CreateAlarmUseCase;
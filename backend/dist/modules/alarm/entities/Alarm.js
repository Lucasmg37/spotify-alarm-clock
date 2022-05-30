"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alarm = void 0;

var _typeorm = require("typeorm");

var _uuid = require("uuid");

var _AlarmCalls = require("./AlarmCalls");

var _AlarmDevice = require("./AlarmDevice");

var _AlarmMedia = require("./AlarmMedia");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let Alarm = (_dec = (0, _typeorm.Entity)("alarm"), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", [void 0]), _dec4 = (0, _typeorm.PrimaryColumn)(), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.Column)(), _dec7 = Reflect.metadata("design:type", String), _dec8 = (0, _typeorm.Column)(), _dec9 = Reflect.metadata("design:type", String), _dec10 = (0, _typeorm.Column)(), _dec11 = Reflect.metadata("design:type", String), _dec12 = (0, _typeorm.Column)(), _dec13 = Reflect.metadata("design:type", Boolean), _dec14 = (0, _typeorm.Column)(), _dec15 = Reflect.metadata("design:type", String), _dec16 = (0, _typeorm.Column)(), _dec17 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec18 = (0, _typeorm.Column)(), _dec19 = Reflect.metadata("design:type", Boolean), _dec20 = (0, _typeorm.CreateDateColumn)(), _dec21 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec22 = (0, _typeorm.ManyToOne)(() => _AlarmDevice.AlarmDevice, alarmDevice => alarmDevice.alarms), _dec23 = Reflect.metadata("design:type", typeof _AlarmDevice.AlarmDevice === "undefined" ? Object : _AlarmDevice.AlarmDevice), _dec24 = (0, _typeorm.ManyToOne)(() => _AlarmMedia.AlarmMedia, alarmMedia => alarmMedia.alarms), _dec25 = Reflect.metadata("design:type", typeof _AlarmMedia.AlarmMedia === "undefined" ? Object : _AlarmMedia.AlarmMedia), _dec26 = (0, _typeorm.OneToMany)(() => _AlarmCalls.AlarmCalls, alarmCalls => alarmCalls.alarm), _dec27 = Reflect.metadata("design:type", Array), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class Alarm {
  setWeekDays(weekDays) {
    this.weekDays = JSON.stringify(weekDays);
  }

  getWeekDays() {
    return JSON.parse(this.weekDays);
  }

  constructor(uuid) {
    _initializerDefineProperty(this, "uuid", _descriptor, this);

    _initializerDefineProperty(this, "userUuid", _descriptor2, this);

    _initializerDefineProperty(this, "name", _descriptor3, this);

    _initializerDefineProperty(this, "time", _descriptor4, this);

    _initializerDefineProperty(this, "repeat", _descriptor5, this);

    _initializerDefineProperty(this, "weekDays", _descriptor6, this);

    _initializerDefineProperty(this, "endAt", _descriptor7, this);

    _initializerDefineProperty(this, "active", _descriptor8, this);

    _initializerDefineProperty(this, "createdAt", _descriptor9, this);

    _initializerDefineProperty(this, "alarmDevice", _descriptor10, this);

    _initializerDefineProperty(this, "alarmMedia", _descriptor11, this);

    _initializerDefineProperty(this, "alarmCalls", _descriptor12, this);

    if (!uuid) {
      this.uuid = (0, _uuid.v4)();
    }
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uuid", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "userUuid", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "time", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "repeat", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "weekDays", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "endAt", [_dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "active", [_dec18, _dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "createdAt", [_dec20, _dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "alarmDevice", [_dec22, _dec23], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "alarmMedia", [_dec24, _dec25], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "alarmCalls", [_dec26, _dec27], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);
exports.Alarm = Alarm;
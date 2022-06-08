"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SessionIntegration = void 0;

var _typeorm = require("typeorm");

var _uuid = require("uuid");

var _User = require("./User");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let SessionIntegration = (_dec = (0, _typeorm.Entity)("session_integration"), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec4 = (0, _typeorm.PrimaryColumn)(), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.Column)(), _dec7 = Reflect.metadata("design:type", String), _dec8 = (0, _typeorm.Column)(), _dec9 = Reflect.metadata("design:type", String), _dec10 = (0, _typeorm.CreateDateColumn)(), _dec11 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec12 = (0, _typeorm.UpdateDateColumn)(), _dec13 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec14 = (0, _typeorm.Column)(), _dec15 = Reflect.metadata("design:type", String), _dec16 = (0, _typeorm.Column)(), _dec17 = Reflect.metadata("design:type", String), _dec18 = (0, _typeorm.ManyToOne)(() => _User.User, user => user.sessionIntegrations), _dec19 = Reflect.metadata("design:type", typeof _User.User === "undefined" ? Object : _User.User), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class SessionIntegration {
  constructor() {
    _initializerDefineProperty(this, "uuid", _descriptor, this);

    _initializerDefineProperty(this, "userUuid", _descriptor2, this);

    _initializerDefineProperty(this, "integration", _descriptor3, this);

    _initializerDefineProperty(this, "createdAt", _descriptor4, this);

    _initializerDefineProperty(this, "updatedAt", _descriptor5, this);

    _initializerDefineProperty(this, "token", _descriptor6, this);

    _initializerDefineProperty(this, "refreshToken", _descriptor7, this);

    _initializerDefineProperty(this, "user", _descriptor8, this);

    if (!this.uuid) {
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
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "integration", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "createdAt", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "updatedAt", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "token", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "refreshToken", [_dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "user", [_dec18, _dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);
exports.SessionIntegration = SessionIntegration;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSessionIntegrationUseCase = void 0;

var _tsyringe = require("tsyringe");

var _ISessionIntegrationRepository = require("../../repositories/interfaces/ISessionIntegrationRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let CreateSessionIntegrationUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("SessionIntegrationRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ISessionIntegrationRepository.ISessionIntegrationRepository === "undefined" ? Object : _ISessionIntegrationRepository.ISessionIntegrationRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateSessionIntegrationUseCase {
  constructor(sessionIntegrationRepository) {
    this.sessionIntegrationRepository = sessionIntegrationRepository;
  }

  async execute(sessionDto) {
    return this.sessionIntegrationRepository.create(sessionDto);
  }

}) || _class) || _class) || _class) || _class);
exports.CreateSessionIntegrationUseCase = CreateSessionIntegrationUseCase;
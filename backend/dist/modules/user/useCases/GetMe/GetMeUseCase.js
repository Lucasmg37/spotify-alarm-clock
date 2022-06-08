"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetMeUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IUserRepository = require("../../repositories/interfaces/IUserRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let GetMeUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UserRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.IUserRepository === "undefined" ? Object : _IUserRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class GetMeUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(userId) {
    return this.userRepository.findOneByUuid(userId);
  }

}) || _class) || _class) || _class) || _class);
exports.GetMeUseCase = GetMeUseCase;
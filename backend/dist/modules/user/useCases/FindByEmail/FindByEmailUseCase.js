"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindByEmailUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IUserRepository = require("../../repositories/interfaces/IUserRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let FindByEmailUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UserRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.IUserRepository === "undefined" ? Object : _IUserRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class FindByEmailUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(email) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      return null;
    }

    return user;
  }

}) || _class) || _class) || _class) || _class);
exports.FindByEmailUseCase = FindByEmailUseCase;
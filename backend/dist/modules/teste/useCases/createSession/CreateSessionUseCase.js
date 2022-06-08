"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSessionUseCase = void 0;

var _bcrypt = require("bcrypt");

var _jsonwebtoken = require("jsonwebtoken");

var _tsyringe = require("tsyringe");

var _ITesteRepository = require("../../repositories/ITesteRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let CreateSessionUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("TesteRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ITesteRepository.ITesteRepository === "undefined" ? Object : _ITesteRepository.ITesteRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateSessionUseCase {
  constructor(testeRepository) {
    this.testeRepository = testeRepository;
  }

  async execute({
    name,
    password
  }) {
    const teste = await this.testeRepository.findByUserName(name);

    if (!teste) {
      throw new Error("Usuário não encontrado");
    }

    const passwordMatch = await (0, _bcrypt.compare)(password, teste.password);

    if (!passwordMatch) {
      throw new Error("Senha incorreta");
    }

    const token = (0, _jsonwebtoken.sign)({}, "secret", {
      subject: teste.uuid,
      expiresIn: "1d"
    });
    return {
      teste: {
        name: teste.name,
        lastName: teste.lastName
      },
      token
    };
  }

}) || _class) || _class) || _class) || _class);
exports.CreateSessionUseCase = CreateSessionUseCase;
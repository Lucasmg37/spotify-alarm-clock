"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetTesteUseCase = void 0;

var _tsyringe = require("tsyringe");

var _ITesteRepository = require("../../repositories/ITesteRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let GetTesteUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("TesteRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ITesteRepository.ITesteRepository === "undefined" ? Object : _ITesteRepository.ITesteRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class GetTesteUseCase {
  constructor(testeRepository) {
    this.testeRepository = testeRepository;
  }

  async execute() {
    return this.testeRepository.get();
  }

}) || _class) || _class) || _class) || _class);
exports.GetTesteUseCase = GetTesteUseCase;
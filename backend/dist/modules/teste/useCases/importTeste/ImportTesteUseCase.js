"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportTesteUseCase = void 0;

var _csvParse = require("csv-parse");

var _fs = _interopRequireDefault(require("fs"));

var _tsyringe = require("tsyringe");

var _ITesteRepository = require("../../repositories/ITesteRepository");

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ImportTesteUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("TesteRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ITesteRepository.ITesteRepository === "undefined" ? Object : _ITesteRepository.ITesteRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ImportTesteUseCase {
  constructor(testeRepository) {
    this.testeRepository = testeRepository;
  }

  loadName(file) {
    return new Promise((resolve, reject) => {
      const stream = _fs.default.createReadStream(file.path);

      const userTeste = {};
      const parseFile = (0, _csvParse.parse)({
        delimiter: ","
      }); // A cada pedaço do something

      stream.pipe(parseFile);
      parseFile.on("data", async line => {
        const [name, lastName] = line;
        userTeste.name = name;
        userTeste.lastName = lastName;
      });
      parseFile.on("end", () => {
        resolve(userTeste);
      });
      parseFile.on("error", () => {
        reject(new Error("Error"));
      });
    });
  }

  async execute(file) {
    const teste = await this.loadName(file);
    const data = await this.testeRepository.create(teste);

    _fs.default.unlinkSync(file.path);

    return data;
  }

}) || _class) || _class) || _class) || _class);
exports.ImportTesteUseCase = ImportTesteUseCase;
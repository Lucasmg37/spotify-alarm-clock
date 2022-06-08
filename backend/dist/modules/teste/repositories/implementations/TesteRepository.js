"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TesteRepository = void 0;

var _dataSource = require("../../../../data-source");

var _teste = require("../../entities/teste");

class TesteRepository {
  constructor() {
    this.repository = void 0;
    this.repository = _dataSource.AppDataSource.getRepository(_teste.Teste);
  } // Singleton
  // private testeModel: Teste;
  // private static instance: TesteRepository;
  // private constructor() {
  //   this.testeModel = new Teste();
  // }
  // Singleton
  // public static getInstance(): TesteRepository {
  //   if (!this.instance) {
  //     this.instance = new TesteRepository();
  //   }
  //   return this.instance;
  // }


  async create({
    name,
    lastName,
    password
  }) {
    const teste = this.repository.create({
      name,
      lastName,
      password
    });
    await this.repository.save(teste);
    return teste;
  }

  async get() {
    const tests = await this.repository.find();
    return tests;
  }

  async findByUserName(name) {
    const teste = await this.repository.findOneBy({
      name
    });
    return teste;
  }

}

exports.TesteRepository = TesteRepository;
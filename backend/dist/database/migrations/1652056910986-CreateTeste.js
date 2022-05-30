"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTeste1652056910986 = void 0;

var _typeorm = require("typeorm");

class CreateTeste1652056910986 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "teste",
      columns: [{
        name: "uuid",
        type: "varchar",
        isPrimary: true
      }, {
        name: "name",
        type: "varchar",
        isNullable: false
      }, {
        name: "lastName",
        type: "varchar",
        isNullable: false
      }, {
        name: "created_at",
        type: "timestamp",
        default: "now()"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("Teste");
  }

}

exports.CreateTeste1652056910986 = CreateTeste1652056910986;
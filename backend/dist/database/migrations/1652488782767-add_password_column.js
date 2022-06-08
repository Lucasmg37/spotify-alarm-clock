"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPasswordColumn1652488782767 = void 0;

var _typeorm = require("typeorm");

class addPasswordColumn1652488782767 {
  async up(queryRunner) {
    await queryRunner.addColumn("teste", new _typeorm.TableColumn({
      name: "password",
      type: "varchar",
      isNullable: false
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropColumn("teste", "password");
  }

}

exports.addPasswordColumn1652488782767 = addPasswordColumn1652488782767;
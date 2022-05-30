"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddNameUserTable1652746084454 = void 0;

var _typeorm = require("typeorm");

class AddNameUserTable1652746084454 {
  async up(queryRunner) {
    await queryRunner.addColumn("user", new _typeorm.TableColumn({
      name: "name",
      type: "varchar",
      isNullable: false
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropColumn("user", "name");
  }

}

exports.AddNameUserTable1652746084454 = AddNameUserTable1652746084454;
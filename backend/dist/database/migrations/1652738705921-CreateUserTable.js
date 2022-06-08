"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserTable1652738705921 = void 0;

var _typeorm = require("typeorm");

class CreateUserTable1652738705921 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "user",
      columns: [{
        name: "uuid",
        type: "varchar",
        isPrimary: true
      }, {
        name: "email",
        type: "varchar",
        isUnique: true,
        isNullable: false
      }, {
        name: "isPremium",
        type: "boolean",
        isNullable: false,
        default: false
      }, {
        name: "createdAt",
        type: "timestamp",
        isNullable: false,
        default: "now()"
      }, {
        name: "disabled",
        type: "boolean",
        isNullable: false,
        default: false
      }, {
        name: "integrationData",
        type: "text",
        isNullable: false
      }, {
        name: "image",
        type: "varchar",
        isNullable: true
      }, {
        name: "integration",
        type: "varchar",
        isNullable: false
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("user");
  }

}

exports.CreateUserTable1652738705921 = CreateUserTable1652738705921;
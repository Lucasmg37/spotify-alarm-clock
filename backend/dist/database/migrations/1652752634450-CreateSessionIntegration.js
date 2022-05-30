"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSessionIntegration1652752634450 = void 0;

var _typeorm = require("typeorm");

class CreateSessionIntegration1652752634450 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "session_integration",
      columns: [{
        name: "uuid",
        type: "varchar",
        isPrimary: true
      }, {
        name: "userUuid",
        type: "varchar",
        isNullable: false
      }, {
        name: "integration",
        type: "varchar",
        isNullable: false
      }, {
        name: "createdAt",
        type: "timestamp",
        isNullable: false,
        default: "now()"
      }, {
        name: "token",
        type: "text",
        isNullable: true
      }, {
        name: "refreshToken",
        type: "text",
        isNullable: true
      }],
      foreignKeys: [{
        columnNames: ["userUuid"],
        referencedTableName: "user",
        referencedColumnNames: ["uuid"],
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("session_integration");
  }

}

exports.CreateSessionIntegration1652752634450 = CreateSessionIntegration1652752634450;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateAlarmCalls1653268558442 = void 0;

var _typeorm = require("typeorm");

class CreateAlarmCalls1653268558442 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "alarm_calls",
      columns: [{
        name: "uuid",
        type: "varchar",
        isPrimary: true
      }, {
        name: "alarmUuid",
        type: "varchar",
        isNullable: false
      }, {
        name: "time",
        type: "time",
        isNullable: false
      }, {
        name: "createdAt",
        type: "timestamp",
        isNullable: false,
        default: "now()"
      }, {
        name: "finished",
        type: "boolean",
        default: 1
      }],
      foreignKeys: [{
        columnNames: ["alarmUuid"],
        referencedTableName: "alarm",
        referencedColumnNames: ["uuid"],
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("alarm_calls");
  }

}

exports.CreateAlarmCalls1653268558442 = CreateAlarmCalls1653268558442;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateAlarmTable1652926807936 = void 0;

var _typeorm = require("typeorm");

class CreateAlarmTable1652926807936 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "alarm",
      columns: [{
        name: "uuid",
        type: "varchar",
        isPrimary: true,
        isNullable: false,
        isUnique: true
      }, {
        name: "alarmMediaUuid",
        type: "varchar",
        isNullable: false,
        isUnique: true
      }, {
        name: "alarmDeviceUuid",
        type: "varchar",
        isNullable: false
      }, {
        name: "userUuid",
        type: "varchar",
        isNullable: false
      }, {
        name: "name",
        type: "varchar",
        isNullable: false
      }, {
        name: "time",
        type: "time",
        isNullable: false
      }, {
        name: "repeat",
        type: "boolean",
        isNullable: false,
        default: false
      }, {
        name: "weekDays",
        type: "varchar",
        isNullable: true
      }, {
        name: "endAt",
        type: "date",
        isNullable: true
      }, {
        name: "active",
        type: "boolean",
        isNullable: false,
        default: true
      }, {
        name: "createdAt",
        type: "timestamp",
        isNullable: false,
        default: "now()"
      }],
      foreignKeys: [{
        columnNames: ["userUuid"],
        referencedColumnNames: ["uuid"],
        referencedTableName: "user",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("alarm");
  }

}

exports.CreateAlarmTable1652926807936 = CreateAlarmTable1652926807936;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateAlarmDevice1652926823770 = void 0;

var _typeorm = require("typeorm");

class CreateAlarmDevice1652926823770 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "alarm_device",
      columns: [{
        name: "uuid",
        type: "varchar",
        isPrimary: true,
        isNullable: false,
        isUnique: true
      }, {
        name: "serviceDevice",
        type: "varchar",
        isNullable: false
      }, {
        name: "createdAt",
        type: "timestamp",
        isNullable: false,
        default: "now()"
      }, {
        name: "name",
        type: "varchar",
        isNullable: false
      }, {
        name: "reference_id",
        type: "varchar",
        isNullable: false
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("alarm_device");
  }

}

exports.CreateAlarmDevice1652926823770 = CreateAlarmDevice1652926823770;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateAlarmMedia1652926832348 = void 0;

var _typeorm = require("typeorm");

class CreateAlarmMedia1652926832348 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "alarm_media",
      columns: [{
        name: "uuid",
        type: "varchar",
        isPrimary: true,
        isNullable: false,
        isUnique: true
      }, {
        name: "mediaType",
        type: "varchar",
        isNullable: false
      }, {
        name: "mediaService",
        type: "varchar",
        isNullable: false
      }, {
        name: "references_ids",
        type: "varchar",
        isNullable: false
      }, {
        name: "volume",
        type: "int",
        isNullable: true
      }, {
        name: "createdAt",
        type: "timestamp",
        isNullable: false,
        default: "now()"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("alarm_media");
  }

}

exports.CreateAlarmMedia1652926832348 = CreateAlarmMedia1652926832348;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddForeignKeyAlarm1652929486667 = void 0;

var _typeorm = require("typeorm");

class AddForeignKeyAlarm1652929486667 {
  async up(queryRunner) {
    await queryRunner.createForeignKey("alarm", new _typeorm.TableForeignKey({
      columnNames: ["alarmMediaUuid"],
      referencedColumnNames: ["uuid"],
      referencedTableName: "alarm_media",
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey("alarm", "alarm_media_uuid_fk");
  }

}

exports.AddForeignKeyAlarm1652929486667 = AddForeignKeyAlarm1652929486667;
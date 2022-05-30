"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddForeignKeyAlarmDevice1653010376461 = void 0;

var _typeorm = require("typeorm");

class AddForeignKeyAlarmDevice1653010376461 {
  async up(queryRunner) {
    await queryRunner.createForeignKey("alarm", new _typeorm.TableForeignKey({
      columnNames: ["alarmDeviceUuid"],
      referencedColumnNames: ["uuid"],
      referencedTableName: "alarm_device",
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey("alarm", "alarm_device_uuid_fk");
  }

}

exports.AddForeignKeyAlarmDevice1653010376461 = AddForeignKeyAlarmDevice1653010376461;
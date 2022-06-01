"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddNextAlarmDateAtAlarm1654048066683 = void 0;

var _typeorm = require("typeorm");

class AddNextAlarmDateAtAlarm1654048066683 {
  async up(queryRunner) {
    await queryRunner.addColumn("alarm", new _typeorm.TableColumn({
      name: "nextAlarmDate",
      type: "timestamp",
      isNullable: true
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropColumn("alarm", "nextAlarmDate");
  }

}

exports.AddNextAlarmDateAtAlarm1654048066683 = AddNextAlarmDateAtAlarm1654048066683;
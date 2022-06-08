"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddUpdatedAtSessionIntegration1652756594216 = void 0;

var _typeorm = require("typeorm");

class AddUpdatedAtSessionIntegration1652756594216 {
  async up(queryRunner) {
    await queryRunner.addColumn("session_integration", new _typeorm.TableColumn({
      name: "updatedAt",
      type: "timestamp",
      isNullable: true,
      default: "now()"
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropColumn("session_integration", "updatedAt");
  }

}

exports.AddUpdatedAtSessionIntegration1652756594216 = AddUpdatedAtSessionIntegration1652756594216;
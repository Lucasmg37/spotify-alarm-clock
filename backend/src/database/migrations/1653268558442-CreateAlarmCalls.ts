import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAlarmCalls1653268558442 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "alarm_calls",
        columns: [
          {
            name: "uuid",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "alarmUuid",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "time",
            type: "time",
            isNullable: false,
          },
          {
            name: "createdAt",
            type: "timestamp",
            isNullable: false,
            default: "now()",
          },
          {
            name: "finished",
            type: "boolean",
            default: 1,
          },
        ],
        foreignKeys: [
          {
            columnNames: ["alarmUuid"],
            referencedTableName: "alarm",
            referencedColumnNames: ["uuid"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("alarm_calls");
  }
}

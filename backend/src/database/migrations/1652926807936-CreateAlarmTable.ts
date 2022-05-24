import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAlarmTable1652926807936 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "alarm",
        columns: [
          {
            name: "uuid",
            type: "varchar",
            isPrimary: true,
            isNullable: false,
            isUnique: true,
          },
          {
            name: "alarmMediaUuid",
            type: "varchar",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "alarmDeviceUuid",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "userUuid",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "time",
            type: "time",
            isNullable: false,
          },
          {
            name: "repeat",
            type: "boolean",
            isNullable: false,
            default: false,
          },
          {
            name: "weekDays",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "endAt",
            type: "date",
            isNullable: true,
          },
          {
            name: "active",
            type: "boolean",
            isNullable: false,
            default: true,
          },
          {
            name: "createdAt",
            type: "timestamp",
            isNullable: false,
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["userUuid"],
            referencedColumnNames: ["uuid"],
            referencedTableName: "user",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("alarm");
  }
}

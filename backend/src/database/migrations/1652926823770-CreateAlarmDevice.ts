import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAlarmDevice1652926823770 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "alarm_device",
        columns: [
          {
            name: "uuid",
            type: "varchar",
            isPrimary: true,
            isNullable: false,
            isUnique: true,
          },
          {
            name: "serviceDevice",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "createdAt",
            type: "timestamp",
            isNullable: false,
            default: "now()",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "reference_id",
            type: "varchar",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("alarm_device");
  }
}

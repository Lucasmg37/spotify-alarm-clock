import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAlarmMedia1652926832348 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "alarm_media",
        columns: [
          {
            name: "uuid",
            type: "varchar",
            isPrimary: true,
            isNullable: false,
            isUnique: true,
          },
          {
            name: "mediaType",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "mediaService",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "references_ids",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "volume",
            type: "int",
            isNullable: true,
          },
          {
            name: "createdAt",
            type: "timestamp",
            isNullable: false,
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("alarm_media");
  }
}

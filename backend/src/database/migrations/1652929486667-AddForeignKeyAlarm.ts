import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AddForeignKeyAlarm1652929486667 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "alarm",
      new TableForeignKey({
        columnNames: ["alarmMediaUuid"],
        referencedColumnNames: ["uuid"],
        referencedTableName: "alarm_media",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("alarm", "alarm_media_uuid_fk");
  }
}

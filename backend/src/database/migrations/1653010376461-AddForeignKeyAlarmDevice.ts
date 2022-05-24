import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AddForeignKeyAlarmDevice1653010376461
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "alarm",
      new TableForeignKey({
        columnNames: ["alarmDeviceUuid"],
        referencedColumnNames: ["uuid"],
        referencedTableName: "alarm_device",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("alarm", "alarm_device_uuid_fk");
  }
}

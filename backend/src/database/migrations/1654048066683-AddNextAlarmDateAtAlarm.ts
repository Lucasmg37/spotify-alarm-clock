import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddNextAlarmDateAtAlarm1654048066683
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "alarm",
      new TableColumn({
        name: "nextAlarmDate",
        type: "timestamp",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("alarm", "nextAlarmDate");
  }
}

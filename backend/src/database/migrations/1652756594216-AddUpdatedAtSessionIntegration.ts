import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddUpdatedAtSessionIntegration1652756594216
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "session_integration",
      new TableColumn({
        name: "updatedAt",
        type: "timestamp",
        isNullable: true,
        default: "now()",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("session_integration", "updatedAt");
  }
}

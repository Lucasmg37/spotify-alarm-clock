import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSessionIntegration1652752634450
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "session_integration",
        columns: [
          {
            name: "uuid",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "userUuid",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "integration",
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
            name: "token",
            type: "text",
            isNullable: true,
          },
          {
            name: "refreshToken",
            type: "text",
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ["userUuid"],
            referencedTableName: "user",
            referencedColumnNames: ["uuid"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("session_integration");
  }
}

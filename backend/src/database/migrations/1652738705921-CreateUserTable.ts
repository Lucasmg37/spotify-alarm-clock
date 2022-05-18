import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1652738705921 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "uuid",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "isPremium",
            type: "boolean",
            isNullable: false,
            default: false,
          },
          {
            name: "createdAt",
            type: "timestamp",
            isNullable: false,
            default: "now()",
          },
          {
            name: "disabled",
            type: "boolean",
            isNullable: false,
            default: false,
          },
          {
            name: "integrationData",
            type: "text",
            isNullable: false,
          },
          {
            name: "image",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "integration",
            type: "varchar",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}

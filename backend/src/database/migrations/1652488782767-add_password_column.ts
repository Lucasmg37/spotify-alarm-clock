import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addPasswordColumn1652488782767 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "teste",
      new TableColumn({
        name: "password",
        type: "varchar",
        isNullable: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("teste", "password");
  }
}

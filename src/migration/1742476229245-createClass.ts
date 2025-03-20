import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClass1742476229245 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "class",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "duration",
            type: "int",
          },
          {
            name: "created_At",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "update_At",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("class");
  }
}

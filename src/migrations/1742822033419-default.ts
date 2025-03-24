import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1742822033419 implements MigrationInterface {
    name = 'Default1742822033419'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`subjects\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rooms\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`description\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`videos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` text NOT NULL, \`url\` text NOT NULL, \`room_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`room_subjet\` (\`room_id\` int NOT NULL, \`subject_id\` int NOT NULL, INDEX \`IDX_aecabc6f4329e573050b4c2db5\` (\`room_id\`), INDEX \`IDX_1d271e33474d8c14cd7e7fa0b6\` (\`subject_id\`), PRIMARY KEY (\`room_id\`, \`subject_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`videos\` ADD CONSTRAINT \`FK_64bb2d8544299bbde670698ac37\` FOREIGN KEY (\`room_id\`) REFERENCES \`rooms\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`room_subjet\` ADD CONSTRAINT \`FK_aecabc6f4329e573050b4c2db5f\` FOREIGN KEY (\`room_id\`) REFERENCES \`rooms\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`room_subjet\` ADD CONSTRAINT \`FK_1d271e33474d8c14cd7e7fa0b6e\` FOREIGN KEY (\`subject_id\`) REFERENCES \`subjects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`room_subjet\` DROP FOREIGN KEY \`FK_1d271e33474d8c14cd7e7fa0b6e\``);
        await queryRunner.query(`ALTER TABLE \`room_subjet\` DROP FOREIGN KEY \`FK_aecabc6f4329e573050b4c2db5f\``);
        await queryRunner.query(`ALTER TABLE \`videos\` DROP FOREIGN KEY \`FK_64bb2d8544299bbde670698ac37\``);
        await queryRunner.query(`DROP INDEX \`IDX_1d271e33474d8c14cd7e7fa0b6\` ON \`room_subjet\``);
        await queryRunner.query(`DROP INDEX \`IDX_aecabc6f4329e573050b4c2db5\` ON \`room_subjet\``);
        await queryRunner.query(`DROP TABLE \`room_subjet\``);
        await queryRunner.query(`DROP TABLE \`videos\``);
        await queryRunner.query(`DROP TABLE \`rooms\``);
        await queryRunner.query(`DROP TABLE \`subjects\``);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class addedToTable1616440206055 implements MigrationInterface {
    name = 'addedToTable1616440206055'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" ADD "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "created_at"`);
    }

}

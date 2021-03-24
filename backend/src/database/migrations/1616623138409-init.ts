import {MigrationInterface, QueryRunner} from "typeorm";

export class init1616623138409 implements MigrationInterface {
    name = 'init1616623138409'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "booking" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "room" character varying NOT NULL, "apt_time" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "booking"`);
    }

}

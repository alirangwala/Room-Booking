import {MigrationInterface, QueryRunner} from "typeorm";

export class migrate1616435727480 implements MigrationInterface {
    name = 'migrate1616435727480'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "booking" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "room" character varying(10) NOT NULL, "start" character varying NOT NULL, "end" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "booking"`);
    }

}

import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUsers1636134503302 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    unsigned: true,
                    isGenerated: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name: "userName",
                    type: "varchar",
                    isUnique: true,
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                    isUnique: true,
                },
                {
                    name: "password",
                    type: "varchar",
                },
                {
                    name: "creationTime",
                    type: "timestamptz",
                },
                {
                    name: "updateTime",
                    type: "timestamptz",
                },
                {
                    name: "deleteTime",
                    type: "timestamptz",
                    isNullable: true,
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.dropTable('user');
        // await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }

}

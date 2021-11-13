import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export enum priority {
    noColor = "noColor",
    color1 = "color1",
    color2 = "color2",
    color3 = "color3",
    color4 = "color4",
    color5 = "color5",
}
export class createCards1636030474400 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "column",
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
                    name: "title",
                    type: "varchar",
                    isNullable: false,
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
                {
                    name: "userId",
                    type: "uuid"
                },
            ],
            foreignKeys: [
                {
                    name: "providerUser",
                    referencedTableName: "user",
                    referencedColumnNames: ["id"],
                    columnNames: ["userId"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        }));
        await queryRunner.createTable(new Table({
            name: "card",
            columns: [
                {
                    name: "cardId",
                    type: "uuid",
                    isPrimary: true,
                    unsigned: true,
                    isGenerated: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name: "title",
                    type: "varchar"
                },
                {
                    name: "description",
                    type: "text"
                },
                {
                    name: "tags",
                    type: "varchar"
                },
                {
                    name: "priority",
                    type: "enum",
                    enum: [priority.noColor, priority.color1, priority.color2, priority.color3, priority.color4, priority.color5],
                    enumName: 'statusEnum',
                    default: `'${priority.noColor}'`
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
                {
                    name: "columnId",
                    type: "uuid"
                },
            ],
            foreignKeys: [
                {
                    name: "providerCard",
                    referencedTableName: "column",
                    referencedColumnNames: ["id"],
                    columnNames: ["columnId"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
                
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.dropForeignKey('card', 'providerCard')
        await queryRunner.dropTable('card');
        // await queryRunner.dropForeignKey('column', 'providerUser')
        await queryRunner.dropTable('column');
    }
}
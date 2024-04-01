import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1712002917754 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns:[
                    {
                        name:"id",
                        type:"int",
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:"increment"
                    },
                    {
                        name:"name",
                        type:"varchar",
                        length:"40"
                    },
                    {
                        name:"surname",
                        type:"varchar",
                        length:"40"
                    },
                    {
                        name:"email",
                        type:"varchar",
                        length:"100"
                    },
                    {
                        name:"password",
                        type:"varchar",
                        length:"100"
                    },
                    {
                        name:"phone",
                        type:"varchar",
                        length:"20"
                    },
                    {
                        name:"role_id",
                        type:"int"
                    }
                ],
                foreignKeys:[
                    {
                        columnNames:["role_id"],
                        referencedColumnNames:["id"],
                        referencedTableName:"roles",
                        onDelete:"CASCADE"
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}

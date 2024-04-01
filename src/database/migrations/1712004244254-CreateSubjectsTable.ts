import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSubjectsTable1712004244254 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"subjects",
                columns:[
                    {
                        name:"id",
                        type:"int",
                        isPrimary:true,
                        isGenerated:true,
                    },
                    {
                        name:"name",
                        type:"varchar",
                        length:"40"
                    },
                    {
                        name:"quantity",
                        type:"float",
                        length:"5"
                    },
                    {
                        name:"course_id",
                        type:"int",
                        length:"5"
                    },
                    {
                        name:"group_id",
                        type:"int",
                        length:"5"
                    },
                    {
                        name:"space_id",
                        type:"int",
                        length:"5"
                    },
                    {
                        name:"hour_type_id",
                        type:"int",
                        length:"5"
                    },
                    {
                        name:"user_id",
                        type:"int",
                        length:"5"
                    },


                ],
                foreignKeys:[
                    {
                        columnNames:["course_id"],
                        referencedTableName:"courses",
                        referencedColumnNames:["id"],
                    },
                    {
                        columnNames:["group_id"],
                        referencedTableName:"groups",
                        referencedColumnNames:["id"],
                    },
                    {
                        columnNames:["space_id"],
                        referencedTableName:"spaces",
                        referencedColumnNames:["id"],
                    },
                    {
                        columnNames:["hour_type_id"],
                        referencedTableName:"hour_types",
                        referencedColumnNames:["id"],
                    },
                    {
                        columnNames:["user_id"],
                        referencedTableName:"users",
                        referencedColumnNames:["id"],
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("subjects");
    }

}

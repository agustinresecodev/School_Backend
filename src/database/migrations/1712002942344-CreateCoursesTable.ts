import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCoursesTable1712002942344 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "courses",
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
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("courses");
    }

}

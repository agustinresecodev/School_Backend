import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateGroupsTable1712002951755 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"groups",
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
                        length:"1"
                    },
                ],
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("groups");
    }

}

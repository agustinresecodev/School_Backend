import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateHourTypesTable1712002986390 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: "hour_types",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "40"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("hour_types");
    }

}

import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class FirstMigration1683158372471 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        "create table person (id int, email varchar(100), username varchar(100), created_at timestamp not null, updated_at timestamp not null);"
      );
      await queryRunner.query(
        "create table note (id int primary key not null, title varchar(50) not null, body varchar(1000) not null, created_at timestamp not null, updated_at timestamp not null, fk_user_id int not null, foreign key (fk_user_id) references person(id));"
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("drop table person");
      await queryRunner.query("drop table note");
    }
}

import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createLog1623790657191 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'log',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'id_funcionario',
          type: 'integer'
        },
        {
          name: 'data_cadastro',
          type: 'time'
        },
        {
          name: 'data_cadastro',
          type: 'datetime'
        },
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('log');
  }
}

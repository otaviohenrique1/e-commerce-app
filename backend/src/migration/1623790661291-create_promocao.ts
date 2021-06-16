import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPromocao1623790661291 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'promocao',
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
          name: 'nome',
          type: 'varchar'
        },
        {
          name: 'tema',
          type: 'varchar'
        },
        {
          name: 'produtos',
          type: 'varchar'
        },
        {
          name: 'inicio',
          type: 'date'
        },
        {
          name: 'termino',
          type: 'date'
        },
        {
          name: 'id_funcionario',
          type: 'integer'
        },
        {
          name: 'data_cadastro',
          type: 'datetime'
        },
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('promocao');
  }
}

import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProduto1623114678960 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'produto',
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
          name: 'preco',
          type: 'decimal',
          precision: 10,
          scale: 2
        },
        {
          name: 'descricao',
          type: 'varchar'
        },
        {
          name: 'quantidade',
          type: 'double'
        },
        {
          name: 'unidade',
          type: 'varchar'
        },
        {
          name: 'fabricante',
          type: 'varchar'
        },
        {
          name: 'categoria',
          type: 'varchar'
        },
        {
          name: 'id_funcionario',
          type: 'integer'
        },
        {
          name: 'data_cadastro',
          type: 'datetime'
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('produto');
  }
}

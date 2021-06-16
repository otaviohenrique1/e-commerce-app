import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createFavorito1623790655099 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'favorito',
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
          name: 'id_produto',
          type: 'integer'
        },
        {
          name: 'id_usuario',
          type: 'integer'
        },
        {
          name: 'favoritado',
          type: 'boolean'
        },
        {
          name: 'category',
          type: 'varchar'
        },
        {
          name: 'data_cadastro',
          type: 'datetime'
        },
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('favorito');
  }
}

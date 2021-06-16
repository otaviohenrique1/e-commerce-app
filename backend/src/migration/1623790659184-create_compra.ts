import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCompra1623790659184 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'compra',
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
          name: 'produtos',
          type: 'varchar'
        },
				{
          name: 'total_itens',
          type: 'integer'
        },
				{
          name: 'total_preco',
          type: 'decimal',
					precision: 10,
          scale: 2
        },
				{
          name: 'id_usuario',
          type: 'integer'
        },
				{
          name: 'data_cadastro',
          type: 'date'
        },
			]
		}));
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('compra');
	}
}

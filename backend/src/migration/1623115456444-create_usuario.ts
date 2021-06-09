import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsuario1623115456444 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'usuario',
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
              name: 'email',
              type: 'varchar'
            },
            {
              name: 'senha',
              type: 'varchar'
            },
            {
              name: 'cpf',
              type: 'varchar'
            },
            {
              name: 'rg',
              type: 'varchar'
            },
            {
              name: 'sexo',
              type: 'varchar'
            },
            {
              name: 'data_nascimento',
              type: 'datetime'
            },
            {
              name: 'telefone',
              type: 'varchar'
            },
            {
              name: 'celular',
              type: 'varchar'
            },
            {
              name: 'endereco',
              type: 'varchar'
            },
            {
              name: 'bairro',
              type: 'varchar'
            },
            {
              name: 'numero',
              type: 'varchar'
            },
            {
              name: 'complemento',
              type: 'varchar'
            },
            {
              name: 'cep',
              type: 'varchar'
            },
            {
              name: 'pais',
              type: 'varchar'
            },
            {
              name: 'cidade',
              type: 'varchar'
            },
            {
              name: 'estado',
              type: 'varchar'
            },
            {
              name: 'ponto_de_referencia',
              type: 'varchar'
            },
            {
              name: 'telefone_contato',
              type: 'varchar'
            },
            {
              name: 'razao_social',
              type: 'varchar'
            },
            {
              name: 'cnpj',
              type: 'varchar'
            },
            {
              name: 'isento_inscricao_estadual',
              type: 'boolean'
            },
            {
              name: 'numero_inscricao_estadual',
              type: 'varchar'
            },
            {
              name: 'contribuinte',
              type: 'boolean'
            },
            {
              name: 'data_cadastro',
              type: 'datetime'
            },
          ],
        }))
    }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuario');
  }
}

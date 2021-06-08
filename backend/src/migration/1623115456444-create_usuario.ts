import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsuario1623115456444 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'usuarios',
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
              type: 'integer'
            },
            {
              name: 'rg',
              type: 'integer'
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
              type: 'integer'
            },
            {
              name: 'celular',
              type: 'integer'
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
              type: 'integer'
            },
            {
              name: 'complemento',
              type: 'varchar'
            },
            {
              name: 'cep',
              type: 'integer'
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
              type: 'integer'
            },
            {
              name: 'razao_social',
              type: 'varchar'
            },
            {
              name: 'cnpj',
              type: 'integer'
            },
            {
              name: 'isento_inscricao_estadual',
              type: 'boolean'
            },
            {
              name: 'numero_inscricao_estadual',
              type: 'integer'
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
    await queryRunner.dropTable('usuarios');
  }
}

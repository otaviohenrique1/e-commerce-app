import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createFuncionario1623114684104 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'funcionarios',
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
            name: 'cargo',
            type: 'varchar'
          },
          {
            name: 'salario',
            type: 'defimal'
          },
          {
            name: 'carteira_trabalho',
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
    await queryRunner.dropTable('funcionarios');
  }
}

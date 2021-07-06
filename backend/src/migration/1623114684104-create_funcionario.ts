import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createFuncionario1623114684104 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'funcionario',
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
            name: 'cargo',
            type: 'varchar'
          },
          {
            name: 'salario',
            type: 'decimal',
            precision: 10,
            scale: 2
          },
          {
            name: 'carteira_trabalho',
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
            name: 'data_cadastro',
            type: 'datetime'
          },
        ],
      }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('funcionario');
  }
}

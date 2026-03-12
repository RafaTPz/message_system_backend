import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateUserTable1741651200000 implements MigrationInterface {
  name = 'CreateUserTable1741651200000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'name',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'longtext',
            isNullable: false,
          },
          {
            name: 'auth',
            type: 'longtext',
            isNullable: true,
          },
          {
            name: 'role',
            type: 'varchar',
            length: '30',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'updateAt',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'createdBy',
            type: 'int',
            isNullable: true,
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            name: 'FK_user_createdBy',
            columnNames: ['createdBy'],
            referencedTableName: 'user',
            referencedColumnNames: ['id'],
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `user`');
  }
}
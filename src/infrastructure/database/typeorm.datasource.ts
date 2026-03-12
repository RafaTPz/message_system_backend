import '../../config/load-env';
import { DataSource } from 'typeorm';

const port = Number(process.env.DB_PORT ?? '3306');
const synchronize = (process.env.DB_SYNCHRONIZE ?? 'false') === 'true';
const logging = (process.env.DB_LOGGING ?? 'false') === 'true';
const isTsRuntime = __filename.endsWith('.ts');

export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST ?? 'localhost',
  port,
  username: process.env.DB_USERNAME ?? 'root',
  password: process.env.DB_PASSWORD ?? '',
  database: process.env.DB_NAME ?? '',
  synchronize,
  logging,
  entities: isTsRuntime ? ['src/**/*.entity.ts'] : ['dist/**/*.entity.js'],
  migrations: isTsRuntime
    ? ['src/infrastructure/database/migrations/*.ts']
    : ['dist/infrastructure/database/migrations/*.js'],
});
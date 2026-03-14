import './config/load-env';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infrastructure/database/database.module';
import { SystemModule } from './modules/system/system.module';
import { UsersModule } from './modules/users/users.module';

const infrastructureImports =
  process.env.NODE_ENV === 'test' ? [] : [DatabaseModule];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ...infrastructureImports,
    SystemModule,
    UsersModule,
  ],
})
export class AppModule {}

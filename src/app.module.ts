import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.CLOUDSQL_HOST || 'localhost',
      port: 5432,
      username: process.env.CLOUDSQL_USER || 'default_user',
      password: String(process.env.CLOUDSQL_PASS || ''), // 문자열 변환하여 오류 방지
      database: process.env.CLOUDSQL_DB || 'default_db',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    UsersModule,
  ],
})
export class AppModule {}

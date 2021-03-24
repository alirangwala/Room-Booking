import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsModule } from './bookings/bookings.module';
import * as dotenv from "dotenv";

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'ali',
    password: 'postgres',
    database: 'my_db',
    entities: ['dist/**/*.entity{.ts,.js'],
    autoLoadEntities: true,
    synchronize: false,
    retryDelay: 3000,
    retryAttempts:2
  }),
  BookingsModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}

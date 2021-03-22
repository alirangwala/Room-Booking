import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsModule } from './bookings/bookings.module';
import { BookingsService } from './bookings/services/bookings.service';
import { BookingsController } from './bookings/controllers/bookings.controller';
import * as dotenv from "dotenv";

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity{.ts,.js'],
    synchronize: false,
    retryDelay: 3000,
    retryAttempts:10
  }),
  BookingsModule
],
  controllers: [BookingsController],
  providers: [BookingsService],
})
export class AppModule {}

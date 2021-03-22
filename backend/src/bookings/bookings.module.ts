import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsService } from './services/bookings.service';
import { BookingsController } from './controllers/bookings.controller';
import { Booking } from './entities/bookings.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([Booking])
  ],
  providers: [BookingsService],
  controllers: [BookingsController]
})
export class BookingsModule {}

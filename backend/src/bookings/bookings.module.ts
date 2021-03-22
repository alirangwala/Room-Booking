import { Module } from '@nestjs/common';
import { BookingsService } from './services/bookings.service';
import { BookingsController } from './controllers/bookings.controller';

@Module({
  providers: [BookingsService],
  controllers: [BookingsController]
})
export class BookingsModule {}

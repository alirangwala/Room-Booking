import { Module } from '@nestjs/common';
import { BookingsModule } from './bookings/bookings.module';
import { BookingsService } from './bookings/services/bookings.service';
import { BookingsController } from './bookings/controllers/bookings.controller';

@Module({
  imports: [BookingsModule],
  controllers: [BookingsController],
  providers: [BookingsService],
})
export class AppModule {}

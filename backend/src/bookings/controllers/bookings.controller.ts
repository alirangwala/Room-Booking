import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { BookingsService } from '../services/bookings.service';

@Controller('api/bookings')
export class BookingsController {

  constructor(
    private bookingsService: BookingsService
  ) {}

  @Get()
  getAll() {
    return this.bookingsService.findAll()
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.bookingsService.findOne(id)
  }

  @Post()
  create(@Body() body: any) {
    return this.bookingsService.create(body)
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.bookingsService.update(id, body)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.bookingsService.delete(id)
  }
}


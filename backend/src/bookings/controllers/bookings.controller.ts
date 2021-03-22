import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';

@Controller('api/bookings')
export class BookingsController {

  @Get('filter')
  getAll() {
    return [1,2,3]
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return id;
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return true;
  }
}


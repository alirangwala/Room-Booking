import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from '../entities/bookings.entity'


@Injectable()
export class BookingsService {

  constructor(
    @InjectRepository(Booking) private BookingsRepo: Repository<Booking>,
  ){}

  findAll() {
    return this.BookingsRepo.find()
  }

  findOne(id:number) {
    return this.BookingsRepo.findOne(id)
  }

  create(body:any) {
    const newBooking = this.BookingsRepo.create(body)
    return this.BookingsRepo.save(newBooking);
  }

  async update(id:number, body:any) {
    const booking = await this.BookingsRepo.findOne(id);
    this.BookingsRepo.merge(booking, body)
    return this.BookingsRepo.save(booking);
  }

  async delete(id:number) {
    await this.BookingsRepo.delete(id)
    return true;
  }
}
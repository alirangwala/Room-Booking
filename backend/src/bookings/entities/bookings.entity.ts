import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  room: string;

  @Column()
  apt_time: string;

  @Column({ default: true })
  isActive: boolean;
}

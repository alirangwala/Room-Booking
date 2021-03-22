import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({length: 10})
  room: string;

  @Column()
  start: string;

  @Column()
  end: string;

  @Column({ default: true })
  isActive: boolean;
}

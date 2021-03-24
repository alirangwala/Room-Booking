import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({length: 10})
  room: string;

  @Column()
  apptTime: number;

  // @Column()
  // end: string;

  // @CreateDateColumn({
  //   name: 'created_at',
  //   type: 'timestamp',
  //   default: ()=> 'CURRENT_TIMESTAMP'
  // })
  // createdAt: Date;

  // @UpdateDateColumn({
  //   name: 'updated_at',
  //   type: 'timestamp',
  //   default: ()=> 'CURRENT_TIMESTAMP'
  // })
  // updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;
}

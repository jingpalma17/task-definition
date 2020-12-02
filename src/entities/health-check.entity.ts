import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HealthCheck {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column({ name: 'is_success' })
  isSuccess: boolean;
}
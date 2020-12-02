import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'health_check' })
export class HealthCheck {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column({ name: 'is_success' })
  isSuccess: boolean;
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { HealthCheck } from './entities/health-check.entity';

@Injectable()
export class HealthCheckService1 {
  constructor(
    @InjectRepository(HealthCheck) private healthCheckRepository: Repository<HealthCheck>,
  ) {}

  async getAll(): Promise<HealthCheck[]> {
    return this.healthCheckRepository.find();
  }

  async create(healthCheck: HealthCheck): Promise<HealthCheck> {
    delete healthCheck.id;
    return this.healthCheckRepository.save(healthCheck);
  }

  async find(id: number): Promise<HealthCheck> {
    return this.healthCheckRepository.findOne(id);
  }

  async update(healthCheck: HealthCheck): Promise<HealthCheck> {
    return this.healthCheckRepository.save(healthCheck);
  }

  async remove(id: number): Promise<boolean> {
    await this.healthCheckRepository.delete(id);
    return true;
  }
}

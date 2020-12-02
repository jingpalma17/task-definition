import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthCheck } from './entities/health-check.entity';
import { HealthCheckService } from './health-check.service';

@Controller()
export class AppController {
  constructor(
    private readonly healthCheckService: HealthCheckService,
    private readonly appService: AppService
  ) {}

  @Get('TestShoppifyHealthCheck')
    async TestShoppifyHealthCheck(): Promise<HealthCheck[]> {
    return this.healthCheckService.getAll();
  } 
}
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

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('TestShoppifyHealthCheck')
    async TestShoppifyHealthCheck(): Promise<HealthCheck[]> {
    return this.healthCheckService.getAll();
  } 
}
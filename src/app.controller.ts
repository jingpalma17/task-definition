import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import {
    HealthCheckService,
    DNSHealthIndicator
  } from "@nestjs/terminus";
import { AppService } from './app.service';
import { HealthCheck } from './entities/health-check.entity';
import { HealthCheckService1 } from './health-check.service';

@Controller()
export class AppController {
  constructor(
    private health: HealthCheckService,
    private dns: DNSHealthIndicator,
    private readonly healthCheckService: HealthCheckService1,
    private readonly appService: AppService
  ) {}

  @Get('TestShoppifyHealthCheck')
    async TestShoppifyHealthCheck(): Promise<any> {
      const healthResult =  await this.health.check(
        [
          () => this.dns.pingCheck('google', 'https://google.com'),
        ],
      );
      await this.healthCheckService.create({ ...new HealthCheck(), url: 'https://google.com', isSuccess: healthResult.status === 'ok'});
      return healthResult;
  } 

    @Get('RandomStatusEnpoint')
    async RandomStatusEnpoint(): Promise<any> {
  } 
}
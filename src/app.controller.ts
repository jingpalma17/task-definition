import { Controller, Get, InternalServerErrorException, Res } from '@nestjs/common';
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

  @Get('health-check-shoppify')
  async healthCheckShoppify(): Promise<any> {
    const healthResult =  await this.health.check(
      [
        () => this.dns.pingCheck('google', 'https://google.com'),
      ],
    );
    await this.healthCheckService.create({ ...new HealthCheck(), url: 'https://google.com', isSuccess: healthResult.status === 'ok'});
    return healthResult;
  } 

  @Get('random-api-status')
  async randomStatusEnpoint(@Res() res): Promise<any> {
    const getRandomStatusCode = () => {
      const statusCodes = [200, 201, 301, 304, 400, 401, 403, 404, 500, 502, 503];
      return statusCodes[Math.floor(Math.random() * statusCodes.length)];
    };
    res.status(getRandomStatusCode()).send();
  } 
}
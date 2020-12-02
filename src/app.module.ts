import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerminusModule } from '@nestjs/terminus';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthCheck } from './entities/health-check.entity';
import { HealthCheckService1 } from './health-check.service';
import { configService } from './config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TerminusModule,
    TypeOrmModule.forFeature([HealthCheck])],
  controllers: [AppController],
  providers: [AppService, HealthCheckService1],
})
export class AppModule {}
 
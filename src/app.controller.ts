import { AppService } from './app.service';
import { ApiOperation } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Obtem o teste de vida da API.' })
  getHello(): string {
    return this.appService.getHello();
  }
}

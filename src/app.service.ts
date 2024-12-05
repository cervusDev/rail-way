import { Injectable } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@Injectable()
export class AppService {
  @ApiOperation({ summary: 'Obtém todos os usuários' })
  getHello(): string {
    return 'Olá mundo!';
  }
}

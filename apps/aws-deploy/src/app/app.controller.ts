import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  health() {
    return 'OK';
  }

  @Get('hello')
  hello() {
    return 'Hello';
  }
}

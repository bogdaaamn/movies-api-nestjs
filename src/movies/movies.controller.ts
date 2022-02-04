import { Controller, Get } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}

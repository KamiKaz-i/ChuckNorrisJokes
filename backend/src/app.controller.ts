import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMyJokes(): string[] {
    return this.appService.getMyJokes();
  }
  @Post()
  postMyJokes(@Body() list: string[]): string[] {
    return this.appService.postMyJokes(list);
  }
  @Put()
  updateMyJokes(@Body('joke') joke: string): string[] {
    console.log(joke);
    return this.appService.updateMyJokes(joke);
  }
}

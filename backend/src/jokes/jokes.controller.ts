import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { JokesService } from './jokes.service';
import type { Joke } from '../types/Joke';
import { AuthGuard } from '../auth/auth.guard';

@Controller('jokes')
export class JokesController {
  constructor(private readonly JokeService: JokesService) {}
  @UseGuards(AuthGuard)
  @Get()
  getMyJokes(@Request() req): Joke[] {
    const { sub } = req.user;
    return this.JokeService.getMyJokes(sub);
  }
  @UseGuards(AuthGuard)
  @Post()
  postMyJokes(@Request() req, @Body() newJoke: Pick<Joke, 'text'>): Joke[] {
    const { sub } = req.user;
    return this.JokeService.postMyJokes(newJoke.text, sub);
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  deleteMyjoke(@Request() req, @Param('id') jokeToDelete: string): Joke[] {
    const { sub } = req.user;
    return this.JokeService.deleteMyJoke(jokeToDelete, sub);
  }
}

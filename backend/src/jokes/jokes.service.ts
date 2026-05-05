import { Injectable } from '@nestjs/common';
import type { Joke } from '../types/Joke';
import { UsersService } from '../users/users.service';
import { v7 as uuidv7 } from 'uuid';
@Injectable()
export class JokesService {
  constructor(private readonly UserService: UsersService) {}
  private jokes: Joke[] = [];

  getMyJokes(userId: number): Joke[] {
    return this.jokes.filter((joke) => joke.userId == userId);
  }
  postMyJokes(newJokeText: string, userId: number): Joke[] {
    const jokeToAdd = {
      id: uuidv7(),
      userId,
      text: newJokeText,
    };
    this.jokes.push(jokeToAdd);
    return this.getMyJokes(userId);
  }

  deleteMyJoke(jokeIdToDelete: string, userId: number): Joke[] {
    this.jokes = this.jokes.filter((joke) => {
      return !(joke.id === jokeIdToDelete && joke.userId === userId);
    });
    return this.getMyJokes(userId);
  }
}

import { Injectable } from '@nestjs/common';
import type { Joke } from '../types/Joke';
import { UsersService } from '../users/users.service';
import { text } from 'stream/consumers';
@Injectable()
export class JokesService {
  constructor(private readonly UserService: UsersService) {}
  private jokes: Joke[] = [
    { id: 1, userId: 1, text: 'what' },
    { id: 3, userId: 1, text: 'ban' },
    { id: 2, userId: 2, text: 'red' },
  ];
  getMyJokes(userId: number): Joke[] {
    return this.jokes.filter((joke) => joke.userId == userId);
  }
  postMyJokes(newJokeText: string, userId: number): Joke[] {
    console.log(this.jokes);
    const jokeToAdd = {
      id: this.jokes.length + 1,
      userId,
      text: newJokeText,
    };
    this.jokes.push(jokeToAdd);
    console.log("-----");
    console.log(this.jokes);
    return this.getMyJokes(userId);
  }
  // updateMyJokes(joke: Joke): Joke[] {
  //   this.jokes = [...this.jokes, joke];
  //   console.log(this.jokes);
  //   return this.jokes;
  // }
  deleteMyJoke(jokeIdToDelete: number, userId: number): Joke[] {
    this.jokes = this.jokes.filter((joke) => {
      return !(joke.id === jokeIdToDelete && joke.userId === userId);
    });
    console.log(this.getMyJokes(userId));
    return this.getMyJokes(userId);
  }
}

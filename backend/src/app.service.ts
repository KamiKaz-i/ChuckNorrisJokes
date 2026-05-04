import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class AppService {
  private jokes: string[] = [];
  getMyJokes(): string[] {
    return this.jokes;
  }
  postMyJokes(list: string[]): string[] {
    this.jokes = list;
    return this.jokes;
  }
  updateMyJokes(joke: string): string[] {
    this.jokes = [...this.jokes, joke];
    console.log(this.jokes);
    return this.jokes;
  }
}

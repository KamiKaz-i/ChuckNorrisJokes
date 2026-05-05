import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  email: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      email: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      email: 'maria',
      password: 'guess',
    },
  ];

  findOne(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }
  create(email: string, pass: string) {
    const newUser = {
      userId: this.users.length + 1,
      email,
      password: pass,
    };
    this.users.push(newUser);
    return newUser;
  }
}

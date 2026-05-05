import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User, UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = this.usersService.findOne(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  signUp(email: string, pass: string): User {
    const existingUser = this.usersService.findOne(email);
    if (existingUser) {
      throw new UnauthorizedException('User already exists');
    }
    const newUser = this.usersService.create(email, pass);
    return newUser;
  }
}

import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async registerUser(@Body('nickname') nickname: string): Promise<User> {
    return await this.usersService.createUser(nickname);
  }

  @Get('find')
  async findUser(@Query('nickname') nickname: string): Promise<User | null> {
    return await this.usersService.findUserByNickname(nickname);
  }
}

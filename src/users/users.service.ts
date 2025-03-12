import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(nickname: string): Promise<User> {
    const user = this.usersRepository.create({ nickname });
    return await this.usersRepository.save(user);
  }

  async findUserByNickname(nickname: string): Promise<User | null> {
    return await this.usersRepository.findOne({ where: { nickname } });
  }
}

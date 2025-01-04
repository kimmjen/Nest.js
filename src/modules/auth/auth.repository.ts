import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthToken } from './entities/auth.entity';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectRepository(AuthToken)
    private readonly repository: Repository<AuthToken>,
  ) {}

  async saveRefreshToken(userId: string, refreshToken: string) {
    const token = this.repository.create({ userId, refreshToken });
    return await this.repository.save(token);
  }

  async findByRefreshToken(refreshToken: string) {
    return await this.repository.findOne({ where: { refreshToken } });
  }
}

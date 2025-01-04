import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<User | null> {
    return await this.repository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.repository.findOne({ where: { email } });
  }

  async createUser(user: Partial<User>): Promise<User> {
    const newUser = this.repository.create(user);
    return await this.repository.save(newUser);
  }

  async updateUser(id: string, user: Partial<User>): Promise<User> {
    await this.repository.update(id, user);
    return await this.findById(id);
  }

  async deleteUser(user: User): Promise<void> {
    await this.repository.remove(user);
  }
}

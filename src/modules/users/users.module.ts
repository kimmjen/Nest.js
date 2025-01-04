import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // TypeORM 엔티티 등록
  controllers: [UsersController],
  providers: [UsersService, UsersRepository], // UsersRepository 추가
  exports: [UsersService, UsersRepository], // 필요 시 다른 모듈에서 사용 가능하게 export
})
export class UsersModule {}

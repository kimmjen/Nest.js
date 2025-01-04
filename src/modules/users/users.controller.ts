import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('Users') // Swagger에서 'Users' 그룹으로 표시
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: '모든 사용자 조회' })
  @ApiResponse({
    status: 200,
    description: '사용자 목록을 반환합니다.',
    schema: {
      example: [
        {
          id: '1',
          email: 'user1@example.com',
          name: 'John Doe',
          isActive: true,
        },
      ],
    },
  })
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '특정 사용자 조회' })
  @ApiParam({ name: 'id', description: '사용자의 ID', example: '1' })
  @ApiResponse({
    status: 200,
    description: '특정 사용자의 정보를 반환합니다.',
    schema: {
      example: {
        id: '1',
        email: 'user1@example.com',
        name: 'John Doe',
        isActive: true,
      },
    },
  })
  @ApiResponse({ status: 404, description: '사용자를 찾을 수 없습니다.' })
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: '사용자 생성' })
  @ApiResponse({
    status: 201,
    description: '새로운 사용자가 생성되었습니다.',
    schema: {
      example: {
        id: '1',
        email: 'user1@example.com',
        name: 'John Doe',
        isActive: true,
      },
    },
  })
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: '사용자 정보 수정' })
  @ApiParam({ name: 'id', description: '사용자의 ID', example: '1' })
  @ApiResponse({
    status: 200,
    description: '사용자 정보가 성공적으로 업데이트되었습니다.',
    schema: {
      example: {
        id: '1',
        email: 'user1@example.com',
        name: 'Jane Doe',
        isActive: true,
      },
    },
  })
  @ApiResponse({ status: 404, description: '사용자를 찾을 수 없습니다.' })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '사용자 삭제' })
  @ApiParam({ name: 'id', description: '사용자의 ID', example: '1' })
  @ApiResponse({
    status: 200,
    description: '사용자가 성공적으로 삭제되었습니다.',
  })
  @ApiResponse({ status: 404, description: '사용자를 찾을 수 없습니다.' })
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(id);
  }
}

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginAuthDto {
  @ApiProperty({
    description: '사용자의 이메일 주소',
    example: 'user@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: '사용자의 비밀번호',
    example: 'password123',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}

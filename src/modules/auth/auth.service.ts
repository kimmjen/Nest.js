import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginAuthDto) {
    const { email, password } = loginDto;

    // 1. 사용자 인증
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // const user = await this.usersService.findByEmail(email);
    // if (!user || user.hashedPassword !== password) {
    //   throw new UnauthorizedException('Invalid email or password');
    // }

    // 2. Access Token 및 Refresh Token 생성
    const payload = { sub: user.id, email: user.email };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '30m' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    // 3. 응답 반환
    return {
      accessToken,
      refreshToken,
    };
  }
}

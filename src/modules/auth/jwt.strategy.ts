import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // 헤더에서 JWT 추출
      ignoreExpiration: false, // 만료된 토큰 거부
      secretOrKey: process.env.JWT_SECRET || 'defaultSecret', // 환경 변수에서 시크릿 키 가져오기
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username }; // 유효한 토큰일 경우 사용자 정보 반환
  }
}

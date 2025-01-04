import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './common/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ProtectedController } from './modules/protected/protected.controller';
import { ProtectedModule } from './modules/protected/protected.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 전역으로 설정하여 모든 모듈에서 사용 가능
      envFilePath: '.env', // .env 파일 경로
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    ProtectedModule,
  ],
  controllers: [AppController, ProtectedController], // AppController만 유지
  providers: [AppService], // AppService만 유지
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // 모든 경로에 미들웨어 적용
  }
}

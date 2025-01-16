import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'node:path';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 정적 파일 제공 (favicon.ico 포함)
  app.useStaticAssets(path.join(__dirname, '..', 'public'));

  // Swagger 설정
  const config = new DocumentBuilder()
    .setTitle('Nest.js API Documentation') // 제목
    .setDescription('API documentation for the Nest.js project') // 설명
    .setVersion('1.0') // 버전
    .addBearerAuth() // Bearer 토큰 인증 추가
    .build();

  // Swagger 문서 생성 및 설정
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document); // Swagger UI를 `/api-docs` 경로에 등록

  // 글로벌 필터 등록
  app.useGlobalFilters(new HttpExceptionFilter());

  const port = process.env.PORT || 3000; // 포트 설정
  await app.listen(port);

  // 로그 출력
  const baseUrl = `http://localhost:${port}`;
  console.log(`\n🚀 Server is running at: ${baseUrl}`);
  console.log(`📚 API Documentation available at: ${baseUrl}/api-docs\n`);
}

bootstrap();

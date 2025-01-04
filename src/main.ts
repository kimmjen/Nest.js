import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger 설정
  const config = new DocumentBuilder()
    .setTitle('Nest.js API Documentation') // 제목
    .setDescription('API documentation for the Nest.js project') // 설명
    .setVersion('1.0') // 버전
    .addBearerAuth() // Bearer 토큰 인증 추가
    .build();
  // 글로벌 필터 등록
  app.useGlobalFilters(new HttpExceptionFilter());
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document); // Swagger UI를 `/api-docs` 경로에 등록

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

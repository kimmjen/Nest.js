import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // 요청 로깅
    console.log(`[Request] ${req.method} ${req.url}`);

    const startTime = Date.now();
    res.on('finish', () => {
      const elapsedTime = Date.now() - startTime;
      // 응답 로깅
      console.log(
        `[Response] ${req.method} ${req.url} - Status: ${res.statusCode} - Time: ${elapsedTime}ms`,
      );
    });

    next();
  }
}

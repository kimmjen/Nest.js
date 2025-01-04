import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import dayjs from 'dayjs';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    // 디버깅 로그 추가
    console.error('Exception caught by filter:', exception);

    const errorResponse = {
      statusCode: status,
      message:
        exception instanceof HttpException
          ? exception.getResponse()
          : 'Internal Server Error',
      timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      path: request.url,
    };

    response.status(status).json(errorResponse);
  }
}

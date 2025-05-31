import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  ConflictException,
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let httpException: HttpException;

    switch (exception.code) {
      case 'P2002':
        httpException = new ConflictException('Duplicate entry detected');
        break;
      case 'P2003':
        httpException = new BadRequestException(
          'Invalid reference in a foreign key constraint',
        );
        break;
      case 'P2025':
        httpException = new NotFoundException('Record not found');
        break;
      case 'P2014':
        httpException = new BadRequestException(
          'Related record does not exist',
        );
        break;
      default:
        httpException = new InternalServerErrorException(
          'An unexpected error occurred',
        );
        break;
    }

    const status = httpException.getStatus();
    const resBody = httpException.getResponse();

    response.status(status).json({
      statusCode: status,
      ...(typeof resBody === 'string' ? { message: resBody } : resBody),
    });
  }
}

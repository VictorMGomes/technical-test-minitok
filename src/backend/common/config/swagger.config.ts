import {
  DocumentBuilder,
  SwaggerModule,
  ApiOperation,
  ApiParam,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiConflictResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';

import { INestApplication, applyDecorators } from '@nestjs/common';
import { patchNestJsSwagger } from 'nestjs-zod';
import { SystemService } from '@/backend/common/modules/system/system.service';

export function apiDocSetup(app: INestApplication) {
  patchNestJsSwagger();

  const configService = app.get<SystemService>(SystemService);

  const config = new DocumentBuilder()
    .setTitle(configService.getAppName())
    .setDescription(configService.getAppDescription())
    .setVersion(configService.getAppVersion())
    .setContact(
      configService.getAppAuthor().name,
      configService.getAppAuthor().url,
      configService.getAppAuthor().email,
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(`${process.env.API_PREFIX}/doc`, app, document, {
    customSiteTitle: configService.getAppName(),
    jsonDocumentUrl: `${process.env.API_PREFIX}/doc/json`,
  });
}

export function apiDocGenerator(paramName?: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const summary = propertyKey
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());

    const decorators = [
      ApiOperation({ summary }),
      ApiOkResponse({ description: 'Request successful' }),
      ApiCreatedResponse({ description: 'Resource created successfully' }),
      ApiBadRequestResponse({ description: 'Invalid request payload' }),
      ApiUnauthorizedResponse({
        description: 'Authentication required or invalid',
      }),
      ApiForbiddenResponse({
        description: 'You do not have permission to access this resource',
      }),
      ApiNotFoundResponse({ description: 'Resource not found' }),
      ApiConflictResponse({
        description: 'Request conflict with current state (e.g., duplicate)',
      }),
      ApiInternalServerErrorResponse({
        description: 'Unexpected server error',
      }),
    ];

    if (paramName) {
      decorators.push(
        ApiParam({
          name: paramName,
          example: 1,
          description: `ID do ${summary.toLowerCase()}`,
        }),
      );
    }

    applyDecorators(...decorators)(target, propertyKey, descriptor);
  };
}

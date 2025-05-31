import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { apiDocSetup } from '@/backend/common/config/swagger.config';
import { PrismaExceptionFilter } from '@/backend/common/config/prisma-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const host = (process.env.APP_HOST as string) ?? '0.0.0.0';
  const port = (process.env.APP_PORT as string) ?? '3000';
  const prefix = (process.env.API_PREFIX as string) ?? 'api';

  app.enableCors();

  app.setGlobalPrefix(prefix);

  app.useGlobalFilters(new PrismaExceptionFilter());

  apiDocSetup(app);

  await app.listen(port, host);
  console.log(`Running on: http://${host}:${port}/${prefix}`);
  console.log(
    `API documentation available at: http://${host}:${port}/${prefix}/doc`,
  );
  console.log(
    `API json available at: http://${host}:${port}/${prefix}/doc/json`,
  );
}
bootstrap().catch((err) => {
  console.error('Application failed to start', err);
});

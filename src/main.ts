import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import express from 'express';

const server = express();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //  await app.listen(process.env.PORT ?? 3000);
  await app.init();
}
bootstrap();

export default server;

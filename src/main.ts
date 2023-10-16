import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';
import * as express from 'express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(express.static(join(__dirname, '..', '/uploads')));
  app.use('/uploads', express.static('uploads')); //Static Server to serve Images
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(3001);
}
bootstrap();

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Create pipes for security management
  app.useGlobalPipes(
    new ValidationPipe({
      //Use transform to transfor entrydata in DTO associated class
      transform: true,
      //Use whitelist to clear unnecesary or unsafe entry information
      whitelist: true,
    }),
  );
  app.enableCors();
  // Stablish the connection port
  await app.listen(3001);
}
bootstrap();

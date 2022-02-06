import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  // Create the Nest AppModule
  const app = await NestFactory.create(AppModule);

  // Create and configure Swagger for documentation
  const swaggerConfig = new DocumentBuilder()
    .setTitle('DEPT Movies API Nestjs')
    .setDescription(
      'A movies API that provides basic information provided by TMDB. Built with Nestjs.',
    )
    .setVersion('1.0')
    .addTag('movies')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  // Start the express app on port 3000
  await app.listen(process.env.PORT || 3000);
}

bootstrap();

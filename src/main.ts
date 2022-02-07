import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

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

  // Set the Helmet modules
  app.use(helmet.expectCt());
  app.use(helmet.frameguard());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.hsts());
  app.use(helmet.noSniff());
  app.use(helmet.permittedCrossDomainPolicies());

  // Start the express app on port 3000
  await app.listen(process.env.PORT || 3000);
}

bootstrap();

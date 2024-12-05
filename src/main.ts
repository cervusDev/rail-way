import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Rail-Way')
    // eslint-disable-next-line prettier/prettier
    .setDescription('Esta API foi criada como um teste de implementação do rail-way.')
    .setVersion('1.0')
    .addBearerAuth() // Adiciona autenticação via token (opcional)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { UserModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import "dotenv/config"

async function bootstrap() {
  const PORT = process.env.PORT ?? 3000;
  const app = await NestFactory.create(UserModule);

  // Habilitar validaciones globales
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('User CRUD API')
    .setDescription('API para gestión de usuarios - CRUD completo')
    .setVersion('1.0')
    .addTag('users', 'Operaciones CRUD para usuarios')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
    console.log(`Swagger UI disponible en: http://localhost:${PORT}/api`);
  });
}
bootstrap();

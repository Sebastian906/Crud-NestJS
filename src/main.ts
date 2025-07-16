import { NestFactory } from '@nestjs/core';
import { UserModule } from './app.module';
import "dotenv/config"

async function bootstrap() {
  const PORT = process.env.PORT ?? 3000;
  const app = await NestFactory.create(UserModule);
  await app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
    
  });
}
bootstrap();

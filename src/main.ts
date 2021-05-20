import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const main = async () => {
  const PORT = process.env.PORT || 4500;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT, () => {
    console.log(`server starts on PORT ${PORT}`);
  });
};

main();

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './exception-filter/globule-exception-hendler.filter';
import { ValidateInputPipe } from './pipes/global-validate-input.pipe';
import * as session from 'express-session';
const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 1000 * 60 * 5 },
    }),
  );

  app.useGlobalFilters(new AllExceptionsFilter());
  app.useStaticAssets('./src/upload');
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidateInputPipe());
  await app.listen(port, () => {
    console.log('main ts');
    console.log('server run on port :', port);
  });
}
bootstrap();

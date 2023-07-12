import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { simpleFunction } from './middleware/simple.middleware';

@Module({
  imports: [UserModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})

//applying middleware for all routes in the module class
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(simpleFunction).forRoutes('*');
  }
}

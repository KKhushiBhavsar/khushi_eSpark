import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { simpleFunction } from '../middleware/simple.middleware';
@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(simpleFunction).forRoutes('user');
  }
}

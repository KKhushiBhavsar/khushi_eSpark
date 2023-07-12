import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './guards/auth.guard';
import { UserInterface } from './app.service';
import { CustomInterceptors } from './custom.interceptor/custom.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // @UseGuards(AuthGuard)
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  //this is default interceptor
  // @Get()
  // getUser(): UserInterface[] {
  //   return this.appService.getUser();
  // }

  //custom interceptor
  @Get()
  @UseInterceptors(CustomInterceptors)
  getUser(): UserInterface[] {
    return this.appService.getUser();
  }
}

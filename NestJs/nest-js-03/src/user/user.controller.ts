/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  Next,
  HttpCode,
  Header,
  Redirect,
  HttpStatus,
  HttpException,
  ParseIntPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { response } from 'express';
import { AuthGuard } from 'src/guards/auth.guard';
import { CustomInterceptors } from 'src/custom.interceptor/custom.interceptor';
import { dataValidation } from 'src/custom.interceptor/dataValidation.interceptor';

@Controller('user')
// @UseInterceptors(CustomInterceptors)
// @UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  // @Post()
  // create(): string {
  //   return 'this add new user';
  // }

  // @Post()
  // @HttpCode(204)
  // create(): string {
  //   return 'we can change default status code behavior by adding @httpcode';
  // }

  // @Post()
  // @Header('Cache-control', 'none')
  // create(): string {
  //   return 'to specify custom responce header';
  // }

  @Get()
  findAll(@Req() request: Request): string {
    return this.userService.findAll();
  }

  // @Get()
  // @Redirect('https://nestjs.com', 301)

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.userService.findOne(+id);
  }

  // @Get()
  // async findAll(): Promise<any[]> {
  //   /** exception filter */
  //   throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
  // @Get('ab*cd')
  // findAll() {
  //   return 'this route use as wild card';
  // }
  @Post()
  @UseInterceptors(dataValidation)
  // async create(@Body() CreateUserDto: CreateUserDto) {
  getUser() {
    return 'this is done with dto file ';
  }

  // @Post()
  // create(@Res() res: Response) {
  //   res.status(HttpStatus.OK).json([]);
  // }
}

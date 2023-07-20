import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  Req,
  Put,
} from '@nestjs/common';

import { AuthInterceptor } from 'src/interceptor/auth.interceptor';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book-dto';
@Controller('book')
@UseInterceptors(AuthInterceptor)
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  async findAll(@Req() req: Request) {
    return await this.bookService.findAll(req);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    console.log('in patch');
    return this.bookService.update(+id, updateBookDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }

  @Put(':id')
  updateUsingPut(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return this.bookService.update(+id, updateBookDto);
  }
}

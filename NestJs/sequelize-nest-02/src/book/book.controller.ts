import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';

import { AuthInterceptor } from 'src/interceptor/auth.interceptor';
import { BookService } from './book.service';
import { CreateBookDto } from './entities/dto/create-book.dto';
import { UpdateBookDto } from './entities/dto/update-book-dto';

@Controller('book')
@UseInterceptors(AuthInterceptor)
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
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
}

import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { BookProvider } from './book.provider';
import { DatabaseModules } from 'src/database/database.modules';

@Module({
  imports: [DatabaseModules],
  controllers: [BookController],
  providers: [BookService, ...BookProvider],
})
export class BookModule {}

import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './entities/dto/create-book.dto';
import { UpdateBookDto } from './entities/dto/update-book-dto';

@Injectable()
export class BookService {
  constructor(
    @Inject('BOOK_REPOSITORY')
    private book_repository: typeof Book,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.book_repository.findAll<Book>();
  }
  async create(CreateBookDto: CreateBookDto): Promise<Book> {
    const book = new Book();
    book.book_name = CreateBookDto.book_name;
    book.author_name = CreateBookDto.author_name;
    book.isAvailable = CreateBookDto.isAvailable;
    return book.save();
  }

  async findOne(id: number): Promise<Book> {
    return this.book_repository.findOne({
      where: {
        id,
      },
    });
  }
  private async getBookDetails(id: number) {
    const book = await this.book_repository.findByPk<Book>(id);
    if (!book) {
      throw new HttpException('NO BOOK FOUND', HttpStatus.NOT_FOUND);
    }
    if (book.id !== id) {
      throw new HttpException(
        'YOU ARE NOT AUTHORIZED',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return book;
  }
  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    const book = await this.getBookDetails(id);
    book.book_name = updateBookDto.book_name;
    book.author_name = updateBookDto.author_name;
    book.isAvailable = updateBookDto.isAvailable;
    return book.save();
  }

  async remove(id: number): Promise<Book> {
    const book = await this.getBookDetails(id);
    await book.destroy();
    return book;
  }
}

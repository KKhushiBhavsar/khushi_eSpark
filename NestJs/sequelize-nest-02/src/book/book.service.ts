import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book-dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  sequelize: any;
  constructor(
    @Inject('BOOK_REPOSITORY')
    private book_repository: typeof Book,
  ) {}
  async find(): Promise<Book[]> {
    return;
  }
  async findAll(req): Promise<Book[]> {
    console.log('req', req.query.where ? req.query.where : '');

    const searchField = req.query.where
      ? Object.keys(JSON.parse(req.query?.where))
      : '';
    const searchValue = req.query.where
      ? Object.values(JSON.parse(req.query?.where))
      : '';

    const sortField = req.query.sort
      ? Object.keys(JSON.parse(req.query.sort))
      : '';
    const sortValue = req.query.sort
      ? Object.values(JSON.parse(req.query.sort))
      : '';
    let sort;
    if (sortValue[0] === 'desc') {
      sort = 'desc';
    } else {
      sort = 'asc';
    }
    console.log('search Value', searchField, 'searchvalue', searchValue);
    console.log('sort field', sortField, 'sortValue', sortValue);
    return this.book_repository.findAll<Book>({
      where: req.query.where
        ? {
            [searchField[0]]: searchValue[0],
          }
        : null,
      limit: req.query.limit ? parseInt(req.query.limit) : null,
      order: req.query.sort ? [[sortField[0], sort]] : null,
    });
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

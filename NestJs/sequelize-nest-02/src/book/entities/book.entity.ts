import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Book extends Model<Book> {
  @Column
  book_name: string;

  @Column
  author_name: string;

  @Column
  isAvailable: boolean;
}

import { Sequelize } from 'sequelize-typescript';
import { Book } from 'src/book/entities/book.entity';

export const databaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        username: 'root',
        password: 'root',
        database: 'nest_library',
      });
      sequelize.addModels([Book]);
      await sequelize.sync();
    },
  },
];

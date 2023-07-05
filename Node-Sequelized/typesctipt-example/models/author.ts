import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import Book from "./book";
interface AuthorAttributes {
  id: Number;
  first_name: string;
  last_name: string;
  email: string;
}
interface AuthorCreationAttributes extends Optional<AuthorAttributes, "id"> {}

interface AuthorInterface
  extends Model<AuthorAttributes, AuthorCreationAttributes>,
    AuthorAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}
const Author = sequelize.define<AuthorInterface>("Author", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.UUID,
    unique: true,
  },
  first_name: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  last_name: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  email: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
});
Author.hasMany(Book, {
  sourceKey: "id",
  foreignKey: "author_id",
  as: "book",
});
Book.belongsTo(Author, {
  foreignKey: "author_id",
  as: "author",
});
export default Author;

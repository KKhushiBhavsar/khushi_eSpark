"use strict";

import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import Author from "./author";
// const Author = require("../models/author");

interface BookAttributes {
  id: number;
  title: string;
  no_of_pages: number;
  author_id: number;
}

interface BookOptionalAttribute extends Optional<BookAttributes, "id"> {}

interface BookInterface
  extends Model<BookAttributes, BookOptionalAttribute>,
    BookAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}
const Book = sequelize.define<BookInterface>("Book", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.UUID,
    unique: true,
  },
  title: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  no_of_pages: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  author_id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: Author,
      key: "id",
    },
  },
});
// Book.belongsTo(Author, {
//   foreignKey: "author_id",
// });
export default Book;

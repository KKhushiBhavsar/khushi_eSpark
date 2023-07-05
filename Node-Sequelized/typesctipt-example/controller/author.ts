const Author = require("../models/author").default;
const addAuthor = (req: any, res: any) => {
  try {
    const data = req.body;
    console.log("Author", Author);
    console.log(data);
    const author = Author.create({
      ...req.body,
    });
    res.json({ data: author });
  } catch (error: any) {
    res.json(error.message);
  }
};

module.exports = { addAuthor };

const image = require("../models").image;
const comment = require("../models").comment;

const add = (req, res) => {
  return image
    .create(
      {
        name: req.body.name,
        url: req.body.url,
        comments: {
          headline: req.body.headline,
          body: req.body.body,
          likes: req.body.likes,
        },
      },
      {
        include: [
          {
            model: comment,
          },
        ],
      }
    )
    .then((image) => res.status(201).send(image))
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
};

module.exports = { add };

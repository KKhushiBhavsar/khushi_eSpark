const video = require("../models").video;
const comment = require("../models").comment;

const add = (req, res) => {
  return video
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
    .then((video) => res.status(201).send(video))
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
};

module.exports = { add };

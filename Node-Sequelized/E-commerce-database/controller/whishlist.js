const whishlist = require("../models").Whishlist;

const listAllWishList = async (req, res) => {
  try {
    const response = await whishlist.findAll();
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
const addToWhishlist = async (req, res) => {
  try {
    const response = await whishlist.create({ ...req.body });
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = { listAllWishList, addToWhishlist };

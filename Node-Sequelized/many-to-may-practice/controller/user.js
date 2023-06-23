const { Profile, User } = require("../models");
const add = async (req, res) => {
  try {
    const userRes = await User.create({
      userName: req.body.userName,
      points: req.body.points,
    });
    const profile = await Profile.findByPk(1);
    const res2 = await profile.addUser(userRes);
    res.json({ data: res2 });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = { add };

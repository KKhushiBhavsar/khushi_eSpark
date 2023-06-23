const { Profile, User } = require("../models");

const add = async (req, res) => {
  try {
    const profileRes = await Profile.create({
      name: req.body.name,
    });
    const user = await User.findByPk(1);
    const res2 = await user.addProfile(profileRes);
    res.json({ data: res2 });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = { add };

exports.userBoard = (req, res) => {
  res.status(200).send("USER CONTENT");
};
exports.adminBoard = (req, res) => {
  res.status(200).send("ADMIN CONTENT");
};
exports.moderatorBoard = (req, res) => {
  res.status(200).send("MODERATOR CONTENT");
};
exports.allAccess = (req, res) => {
  res.status(200).send("ALL ACCESS");
};

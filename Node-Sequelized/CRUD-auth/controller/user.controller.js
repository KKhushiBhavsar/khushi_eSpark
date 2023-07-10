exports.userBoard = (req, res) => {
  res.status(200).send("USER DASHBOARD");
};
exports.adminBoard = (req, res) => {
  res.status(200).send("ADMIN DASHBOARD");
};
exports.allAccess = (req, res) => {
  res.status(200).send("ALL ACCESS");
};

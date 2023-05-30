const isUserLoggedIn = (to, from, next) => {
  const isUser = JSON.parse(localStorage.getItem("loginUser")) || [];
  if (isUser.length === 0) {
    next(true);
  } else {
    // alert("user already logged in");
    next(false);
  }
};
module.exports = isUserLoggedIn;

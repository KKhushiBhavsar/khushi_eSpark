interface userInterface {
  emailId: any;
  password: number;
  monthYear: string;
  transactionHistory: any;
}

export const getAllUsers = () => {
  const allUsers = localStorage.getItem("allUser");
  if (allUsers) return JSON.parse(allUsers);
};
export const loginUser = (user: userInterface) => {
  const allUsers = getAllUsers() || [];
  let IsUser;
  allUsers.forEach((userElement: any) => {
    // console.log(userElement);
    IsUser = [userElement].filter(
      (isUser: any) =>
        isUser.emailId === user.emailId && isUser.password === user.emailId
    );
    console.log(IsUser);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  });
  return IsUser;
};
export const userRegistration = (user: userInterface) => {
  const allUsers = getAllUsers() || [];
  allUsers.push(user);
  localStorage.setItem("allUser", JSON.stringify(allUsers));
  return true;
};
export const isUserLogin = () => {
  const isUser = localStorage.getItem("loggedInUser");
  if (isUser) return JSON.parse(isUser);
};

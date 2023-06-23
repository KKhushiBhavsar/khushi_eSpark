export const userLoginValidation = {
  email: [
    (value: string) => {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },
  ],
  password: [
    (value: string) => {
      if (value?.length > 5) return true;
      return "Must be greater than 5";
    },
  ],
  name: [
    (value: string) => {
      if (value?.length > 2) return true;
      return "Name Needs atleast 2 character";
    },
  ],
};
export const userRegistrationValidation = {
  email: [
    (value: string) => {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },
  ],
  password: [
    (value: string) => {
      if (value?.length > 5) return true;
      return "Must be greater than 5";
    },
  ],
  name: [
    (value: string) => {
      if (value?.length > 2) return true;
      return "Name Needs atleast 2 character";
    },
  ],
  surname: [
    (value: string) => {
      if (value?.length > 2) return true;
      return "Name Needs atleast 2 character";
    },
  ],
};

export const getUser = () => {
  const token = localStorage.getItem("token");
  console.log("token", token);
  if (!token) {
    return false;
  } else {
    return true;
  }
};

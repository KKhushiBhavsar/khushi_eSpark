export const userLoginRules = {
  email: [
    (value: string) => {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },
  ],
  password: [
    (value: any) => {
      if (value?.length > 5) return true;
      return "Must be greater than 5";
    },
  ],
};

export const transactionValidation = {
  select: [
    (value: any) => {
      if (!value) {
        return "Select Field";
      }

      return true;
    },
  ],
  date: [
    (value: any) => {
      if (!value) {
        return "Select date";
      }

      return true;
    },
  ],
  currency: [
    (value: any) => {
      if (!value) {
        return "Select currency";
      }

      return true;
    },
  ],
  notes: [
    (value: any) => {
      if (!value) {
        return "Select notes";
      }
      if (value?.length > 250) {
        return "only 250 characters are allowed";
      }
      return true;
    },
  ],
};

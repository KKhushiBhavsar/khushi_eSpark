export const transactionValidation = {
  select: [
    (value: string) => {
      if (!value) {
        return "Select Field";
      }

      return true;
    },
  ],
  date: [
    (value: string) => {
      if (!value) {
        return "Select date";
      }

      return true;
    },
  ],
  currency: [
    (value: string) => {
      if (!value) {
        return "Select currency";
      }

      return true;
    },
  ],
  notes: [
    (value: string) => {
      if (!value) {
        return "Select notes";
      }
      if (value?.length > 250) {
        return "only 250 characters are allowed";
      }
      return true;
    },
  ],
  files: [
    (value: any) => {
      if (!value) {
        return "Select Files";
      }
      return (
        !value ||
        !value.length ||
        value[0].size < 1000000 ||
        "file size should be less than 1 MB!"
      );
    },
  ],
};

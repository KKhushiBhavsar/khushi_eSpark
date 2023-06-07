// import { transactions } from "@/store/transactions";

// import { transform } from "@vue/compiler-core";

interface transactionInterface {
  id: any;
  transactionDate: string;
  monthYear: string;
  transactionType: string;
  fromAccount: string;
  toAccount: string;
  amount: string;
}

export const getAllTransactionList = () => {
  // const allTransaction: transactionInterface = JSON.parse(
  //   localStorage.getItem("transaction") || ""
  // );
  // return allTransaction;

  const allTransaction = localStorage.getItem("transaction");
  if (allTransaction) return JSON.parse(allTransaction);
};

export const addTransaction = (transaction: transactionInterface) => {
  const allTransaction = getAllTransactionList() || [];
  allTransaction.push(transaction);
  localStorage.setItem("transaction", JSON.stringify(allTransaction));
  console.log(allTransaction);
  return allTransaction;
};

export const getViewTransactionDetails = (
  transcationId: transactionInterface
) => {
  const allTransaction = getAllTransactionList() || [];

  return allTransaction.find(
    (transaction: transactionInterface) => transaction.id === transcationId
  );
};

export const sortByFiledName = (transactionTitle: string, order: string) => {
  const sortedTransaction = getAllTransactionList() || [];
  if (order === "asc") {
    console.log(
      sortedTransaction.sort((x: any, y: any) => {
        x[transactionTitle] > y[transactionTitle] ? -1 : 1;
      })
    );
  }
};

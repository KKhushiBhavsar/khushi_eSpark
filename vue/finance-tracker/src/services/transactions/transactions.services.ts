// import { transactions } from "@/store/transactions";

import { transactions } from "@/store/transactions";

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

// export const sortByFiledName = (transactionTitle: string, order: string) => {
//   const sortedTransaction = getAllTransactionList() || [];
//   if (order === "asc") {
//     const sortedOrderd = sortedTransaction.sort((x: any, y: any) => {
//       return x.transactionType == y.transactionType
//         ? 0
//         : x.transactionType > y.transactionType
//         ? 1
//         : -1;
//     });
//     console.log("in function", sortedOrderd);
//     return sortedOrderd;
//   }
// };
export const sortAllTransaction = (
  order: string,
  transaction: any,
  transactionTitle: any
) => {
  const sortedTransaction = transaction;
  console.log("transactionTitle", transactionTitle);
  if (order) {
    const sortedOrderd = sortedTransaction.sort((x: any, y: any) => {
      return x[transactionTitle] == y[transactionTitle]
        ? 0
        : x[transactionTitle] > y[transactionTitle]
        ? 1
        : -1;
    });
    console.log("in function", sortedOrderd);
    return sortedOrderd;
  } else {
    console.log("decending");
    const sortedOrderd = sortedTransaction.sort((x: any, y: any) => {
      return x[transactionTitle] == y[transactionTitle]
        ? 0
        : x[transactionTitle] < y[transactionTitle]
        ? 1
        : -1;
    });
    return sortedOrderd;
  }
};

export const groupByValues = (transactionType: any) => {
  const allTransaction = getAllTransactionList() || [];
  console.log("transactionType", transactionType);
  const GroupedObject = allTransaction.reduce((groupedObj: any, all: any) => {
    console.log("all", groupedObj);
    if (Object.keys(groupedObj).includes(all[transactionType]))
      return groupedObj;

    groupedObj[all[transactionType]] = allTransaction.filter(
      (groupObj: any) => groupObj[transactionType] === all[transactionType]
    );
    return groupedObj;
  }, {});
  // console.log("GroupedObject", GroupedObject);
  return GroupedObject;
};

export const SearchTransaction = (
  searchValue: any,
  transactionType: any,
  allTransaction: any
) => {
  // const allTransaction = getAllTransactionList() || [];
  console.log(allTransaction);
  let searchObj;
  if (transactionType) {
    searchObj = allTransaction.filter((transaction: any) =>
      transaction[transactionType]
        ?.toUpperCase()
        .includes(searchValue.toUpperCase())
    );
    if (searchObj.length) {
      return searchObj;
    }
  } else {
    return allTransaction;
  }
  console.log(searchValue, transactionType);
};

export const editTransactionInDatabase = (editdata: any) => {
  const allTransaction = getAllTransactionList() || [];
  console.log(allTransaction);
  allTransaction.splice(
    allTransaction.findIndex(
      (transactions: any) => transactions.id === editdata.id
    ),
    1,
    editdata
  );
  localStorage.setItem("transaction", JSON.stringify(allTransaction));
  return allTransaction;
};

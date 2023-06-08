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

export const sortTransactionDate = (order: string, transaction: any) => {
  const sortedTransaction = transaction;
  if (order) {
    const sortedOrderd = sortedTransaction.sort((x: any, y: any) => {
      return x.monthYear == y.monthYear
        ? 0
        : x.monthYear > y.monthYear
        ? 1
        : -1;
    });
    console.log("in function", sortedOrderd);
    return sortedOrderd;
  } else {
    console.log("decending");
    const sortedOrderd = sortedTransaction.sort((x: any, y: any) => {
      return x.monthYear == y.monthYear
        ? 0
        : x.monthYear < y.monthYear
        ? 1
        : -1;
    });
    return sortedOrderd;
  }
};

export const sortMonthYear = (order: boolean, transaction: any) => {
  const sortedTransaction = transaction;
  if (order) {
    const sortedOrderd = sortedTransaction.sort((x: any, y: any) => {
      return x.monthYear == y.monthYear
        ? 0
        : x.monthYear > y.monthYear
        ? 1
        : -1;
    });
    console.log("in function", sortedOrderd);
    return sortedOrderd;
  } else {
    console.log("decending");
    const sortedOrderd = sortedTransaction.sort((x: any, y: any) => {
      return x.monthYear == y.monthYear
        ? 0
        : x.monthYear < y.monthYear
        ? 1
        : -1;
    });
    return sortedOrderd;
  }
};

export const sortTransactionType = (order: boolean, transaction: any) => {
  const sortedTransaction = transaction;
  if (order) {
    const sortedOrderd = sortedTransaction.sort((x: any, y: any) => {
      return x.transactionType == y.transactionType
        ? 0
        : x.transactionType > y.transactionType
        ? 1
        : -1;
    });
    console.log("in function", sortedOrderd);
    return sortedOrderd;
  } else {
    console.log("decending");
    const sortedOrderd = sortedTransaction.sort((x: any, y: any) => {
      return x.transactionType == y.transactionType
        ? 0
        : x.transactionType < y.transactionType
        ? 1
        : -1;
    });
    return sortedOrderd;
  }
};

export const sortFromAccount = (order: boolean, transaction: any) => {
  // const sortedTransaction = getAllTransactionList() || [];
  const sortedTransaction = transaction;
  if (order) {
    const sortedOrderd = sortedTransaction.sort((x: any, y: any) => {
      return x.fromAccount == y.fromAccount
        ? 0
        : x.fromAccount > y.fromAccount
        ? 1
        : -1;
    });
    console.log("in function", sortedOrderd);
    return sortedOrderd;
  } else {
    console.log("decending");
    const sortedOrderd = sortedTransaction.sort((x: any, y: any) => {
      return x.fromAccount == y.fromAccount
        ? 0
        : x.fromAccount < y.fromAccount
        ? 1
        : -1;
    });
    return sortedOrderd;
  }
};

export const sortToAccount = (order: boolean, transaction: any) => {
  const sortedTransaction = transaction;
  if (order) {
    const sortedOrderd = sortedTransaction.sort((x: any, y: any) => {
      return x.toAccount == y.toAccount
        ? 0
        : x.toAccount > y.toAccount
        ? 1
        : -1;
    });
    console.log("in function", sortedOrderd);
    return sortedOrderd;
  } else {
    console.log("decending");
    const sortedOrderd = sortedTransaction.sort((x: any, y: any) => {
      return x.toAccount == y.toAccount
        ? 0
        : x.toAccount < y.toAccount
        ? 1
        : -1;
    });
    return sortedOrderd;
  }
};

export const sortAmount = (order: boolean, transaction: any) => {
  const sortedTransaction = transaction;
  if (order) {
    const sortedOrderd = sortedTransaction.sort((x: any, y: any) => {
      return parseInt(x.amount) > parseInt(y.amount) ? 1 : -1;
    });
    console.log("in function", sortedOrderd);
    return sortedOrderd;
  } else {
    console.log("decending");
    const sortedOrderd = sortedTransaction.sort((x: any, y: any) => {
      return parseInt(x.amount) < parseInt(y.amount) ? 1 : -1;
    });
    return sortedOrderd;
  }
};
export const sortNotes = (order: boolean, transaction: any) => {
  const sortedTransaction = transaction;
  if (order) {
    const sortedOrderd = sortedTransaction.sort((x: any, y: any) => {
      return x.notes == y.notes ? 0 : x.notes > y.notes ? 1 : -1;
    });
    console.log("in function", sortedOrderd);
    return sortedOrderd;
  } else {
    console.log("decending");
    const sortedOrderd = sortedTransaction.sort((x: any, y: any) => {
      return x.notes == y.notes ? 0 : x.notes < y.notes ? 1 : -1;
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

export const SearchTransaction = (searchValue: any) => {
  // const allTransaction = getAllTransactionList() || [];
  // const variable: any = allTransaction.forEach((transaction: any) =>
  //   transaction.filter((transactions: any) => {
  //     transactions.transactionDate
  //       .toLowerCase()
  //       .includes(searchValue.toLowerCase()) ||
  //       transactions.monthYear
  //         .toLowerCase()
  //         .includes(searchValue.toLowerCase()) ||
  //       transactions.transactionType
  //         .toLowerCase()
  //         .includes(searchValue.toLowerCase()) ||
  //       transactions.fromAccount
  //         .toLowerCase()
  //         .includes(searchValue.toLowerCase()) ||
  //       transactions.toAccount
  //         .toLowerCase()
  //         .includes(searchValue.toLowerCase()) ||
  //       transactions.amount.toLowerCase().includes(searchValue.toLowerCase());
  //   })
  // );
  // console.log(variable);
};

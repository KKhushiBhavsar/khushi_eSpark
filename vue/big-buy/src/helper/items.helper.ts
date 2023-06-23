import { getAllItem } from "@/service/fetchapi.service";
export const getAllItems = () => {
  const allItems = getAllItem();
  return allItems;
  console.log(allItems);
};
export const getEditItems = async (itemId: string) => {
  //   const editItemId = itemId;
  const allItems = await getAllItems();
  const editData = allItems.data.data;
  const data = editData.filter((data: any) => data.id === itemId);
  console.log("in function ", allItems.data.data);
  return data;
};

export const addItemValidation = {
  itemName: [
    (value: string) => {
      if (value?.length > 2) return true;
      return "Name Needs atleast 2 character";
    },
  ],
  description: [
    (value: string) => {
      if (value?.length > 10) return true;
      return "Must be greater than 10";
    },
  ],
  price: [
    (value: string) => {
      if (value?.length > 2) return true;
      return "Price Required";
    },
  ],
};

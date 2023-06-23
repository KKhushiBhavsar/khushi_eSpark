<template>
  <v-card class="pa-10 ma-10">
    <v-card v-if="!allItemsData">
      <VRow class="fill-height ma-0 pa-5" align="center" justify="center">
        <VProgressCircular
          indeterminate
          :size="50"
          color="grey-lighten-8"
        ></VProgressCircular>
      </VRow>
    </v-card>
    <v-card v-else>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">Search List</v-btn>
          <v-chip label v-if="searchTitle" color="primary">{{
            searchTitle
          }}</v-chip>
        </template>
        <ChildComponent :data="item" :getData="getData" />
        <v-list>
          <v-list-item
            v-for="(item, index) in SearchTags"
            :key="index"
            @click="searchInItems(item.key, item.title)"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <VTextField
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        @change="searchItem()"
      ></VTextField>
      <VTable>
        <!-- <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        bottom
        color="deep-purple-accent-4"
      ></v-progress-linear>
      <v-spacer></v-spacer> -->
        <thead>
          <tr>
            <th v-for="heading in headers" :key="heading">
              <!-- <v-icon icon="mdi-calendar-range-outline"></v-icon> -->
              <v-chip :prepend-icon="heading.headerIcon" variant="text"
                >{{ heading.title
                }}<v-icon
                  icon="mdi-swap-vertical-bold"
                  @click="sortField(heading.key)"
                ></v-icon
              ></v-chip>
            </th>
          </tr>
        </thead>
        <tbody v-if="allItemsData">
          <tr v-for="item in allItemsData" :key="item.id">
            <td>
              <v-chip label color="red">{{ item.name }} </v-chip>
            </td>
            <td>
              <v-chip label color="blue">{{ item.details.seller }} </v-chip>
            </td>
            <td>
              <v-chip label color="green"
                >{{ item.details.description }}
              </v-chip>
            </td>
            <td>
              <v-chip label :color="getColor(item.details.price)"
                >{{ item.details.price }}
              </v-chip>
            </td>
            <td>
              <v-chip label :color="getColor(item.details.price)"
                >{{ item.details.minPrice }}
              </v-chip>
            </td>
            <td>
              <v-chip label :color="getColor(item.details.price)"
                >{{ item.details.maxPrice }}
              </v-chip>
            </td>
            <td>
              <v-btn @click="editItem(item.id)" v-if="isEditAllowed(item.id)"
                >Edit</v-btn
              >
            </td>
            <td>
              <v-btn @click="viewItem(item.id)">View</v-btn>
            </td>
            <td>
              <v-btn @click="purchase(item)">Purchase</v-btn>
            </td>
          </tr>
        </tbody>
      </VTable>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">{{ pageTitle }}</v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="item in pageNo"
            :key="item"
            @click="onPagination(item)"
            :value="item"
          >
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-pagination
        v-model="page"
        :length="noOfPages"
        rounded="circle"
        @update:modelValue="getfunction"
      ></v-pagination>
    </v-card>
  </v-card>
</template>
<script>
import {
  getAllItem,
  purchaseItem,
  getMyItems,
} from "@/service/fetchapi.service";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getUser } from "@/helper/user.helper";
export default {
  name: "AllItems",
  setup() {
    const router = useRouter();
    const loading = ref(true);
    const allItemsData = ref(null);
    const IsSortingOrderAsc = ref(true);
    const allMyItems = ref(null);
    const pageNo = ref([1, 2, 5, 10]);
    const pageTitle = ref(5);
    const noOfPages = ref(null);
    const page = ref(1);
    const searchTitle = ref(null);
    const searchTitleKey = ref(null);
    const search = ref(null);
    const headers = ref([
      {
        title: "Name",
        align: "end",
        key: "name",
        headerIcon: "mdi-calendar-range-outline",
      },
      { title: "Seller", align: "end", key: "seller", headerIcon: "" },
      {
        title: "Description",
        align: "end",
        key: "details.description",
        headerIcon: "mdi-play-circle-outline",
      },
      {
        title: "Price",
        align: "end",
        key: "details.price",
        headerIcon: "mdi-play-circle-outline",
      },
      {
        title: "Min Price",
        align: "end",
        key: "details.minPrice",
        headerIcon: "mdi-play-circle-outline",
      },
      {
        title: "MaxPrice",
        align: "end",
        key: "details.maxPrice",
        headerIcon: "mdi-pound",
      },
    ]);
    const SearchTags = ref([
      { title: "Name", align: "end", key: "name", headerIcon: "" },
      {
        title: "Seller",
        align: "end",
        key: "details.seller",
        headerIcon: "mdi-play-circle-outline",
      },
      {
        title: "Description",
        align: "end",
        key: "details.description",
        headerIcon: "mdi-play-circle-outline",
      },
      {
        title: "Price",
        align: "end",
        key: "details.price",
        headerIcon: "mdi-play-circle-outline",
      },
      {
        title: "Min Price",
        align: "end",
        key: "details.minPrice",
        headerIcon: "mdi-play-circle-outline",
      },
      {
        title: "Max Price",
        align: "end",
        key: "details.maxPrice",
        headerIcon: "mdi-play-circle-outline",
      },
    ]);
    const getfunction = async () => {
      try {
        const isUserLoggerIn = await getUser();
        if (isUserLoggerIn) {
          try {
            setTimeout(async () => {
              loading.value = false;
              const allItems = await getAllItem(
                `?page=${page.value}&limit=${pageTitle.value}`
              );
              // if (allItems) {
              //   loading.value = false;
              // }
              const myItem = await getMyItems();
              allItemsData.value = allItems.data.data;
              allMyItems.value = myItem.data.data;
              // console.log("MyItems", allMyItems.value);
              const pagination = allItems.data.pagination;
              // console.log("all items", allItems.data.data);
              noOfPages.value = Math.ceil(pagination.count / pagination.limit);
            }, 1000);
          } catch (error) {
            if (error.status === 500) {
              console.log("Internal Server Error");
            }
          }
        }
      } catch (error) {
        if (error.status === 500) {
          console.log("Internal Server Error");
        }
      }
    };
    getfunction();
    const isEditAllowed = (itemId) => {
      if (allMyItems.value?.includes(itemId)) {
        console.log("in looooooooooop");
        return true;
      }
      return false;
    };
    const editItem = (itemId) => {
      // console.log(itemId);
      router.push({
        name: "EditItem",
        params: {
          itemId: itemId,
        },
      });
    };
    const viewItem = (itemId) => {
      router.push({
        name: "ViewItem",
        params: {
          itemId: itemId,
        },
      });
    };
    const purchase = async (item) => {
      // console.log(item.id, item.details.price);
      const response = await purchaseItem({
        item: item.id,
        purchasePrice: item.details.price,
      });
    };
    const sortField = async (sortFieldTitle) => {
      const allItems = await getAllItem(`?sort={"${sortFieldTitle}": 1}`);
      allItemsData.value = allItems.data.data;
      // console.log("allItems", allItems.data.data);
    };
    const onPagination = (no) => {
      pageTitle.value = no;
      page.value = 1;
      getfunction();
      // console.log(no, "page");
    };
    const searchInItems = (key, title) => {
      searchTitleKey.value = key;
      searchTitle.value = title;
      // console.log(key, title);
    };

    const searchItem = async () => {
      // console.log("search title", searchTitleKey.value);
      // console.log("search value ", search.value);
      const allItems = await getAllItem(
        `?where={"${searchTitleKey.value}": ${search.value}}`
      );
      allItemsData.value = allItems.data.data;
      // console.log(allItems.data.data);
    };
    const getColor = (price) => {
      if (price > 40000) {
        return "orange";
      } else if (price > 20000) {
        return "green";
      } else {
        return "blue";
      }
    };
    return {
      getfunction,
      headers,
      allItemsData,
      getColor,
      editItem,
      viewItem,
      purchase,
      isEditAllowed,
      sortField,
      IsSortingOrderAsc,
      pageNo,
      page,
      onPagination,
      pageTitle,
      noOfPages,
      SearchTags,
      searchInItems,
      searchTitle,
      search,
      searchItem,
      searchTitleKey,
      loading,
    };
  },
};
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>

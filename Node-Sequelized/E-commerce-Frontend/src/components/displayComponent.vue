<template>
  <VCard class="pa-10 ma-10">
    <VCard class="ma-10 pa-10" v-if="!customerData">
      No Customer found at this moment
    </VCard>
    <!-- <VCard v-if="!customerData">
      <VRow class="fill-height ma-0 pa-5" align="center" justify="center">
        <VProgressCircular
          indeterminate
          :size="50"
          color="grey-lighten-8"
        ></VProgressCircular>
      </VRow>
    </VCard> -->
    <v-card v-else>
      <VTextField
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        @change="searchItem()"
      ></VTextField>
      <VTable>
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
        <tbody v-if="customerData">
          <tr v-for="item in customerData" :key="item.id">
            <td>
              <v-chip label color="red">{{ item.first_name }} </v-chip>
            </td>
            <td>
              <v-chip label color="blue">{{ item.last_name }} </v-chip>
            </td>
            <td>
              <v-chip label color="green">{{ item.email }} </v-chip>
            </td>
            <td>
              <v-chip label color="pink">{{ item.phone_number }} </v-chip>
            </td>
            <td>
              <v-chip label color="black">{{ item.address }} </v-chip>
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
  </VCard>
</template>
<script>
import { ref } from "vue";
import { customerServices } from "@/service/customer.services";

export default {
  name: "AllItems",
  setup() {
    const loading = ref(true);
    const customerData = ref(null);
    const IsSortingOrderAsc = ref(true);
    const pageNo = ref([1, 2, 5, 10]);
    const pageTitle = ref(5);
    const noOfPages = ref(null);
    const page = ref(1);
    const searchTitle = ref(null);
    const searchTitleKey = ref(null);
    const search = ref(null);
    const order = ref("asc");
    const headers = ref([
      {
        title: "First Name",
        align: "end",
        key: "first_name",
        headerIcon: "mdi-calendar-range-outline",
      },
      { title: "Last Name", align: "end", key: "last_name", headerIcon: "" },
      {
        title: "Email",
        align: "end",
        key: "email",
        headerIcon: "mdi-play-circle-outline",
      },
      {
        title: "Phone Number",
        align: "end",
        key: "phone_number",
        headerIcon: "mdi-play-circle-outline",
      },
      {
        title: "Address",
        align: "end",
        key: "address",
        headerIcon: "mdi-play-circle-outline",
      },
    ]);
    const getfunction = async () => {
      try {
        // setTimeout(async () => {
        loading.value = false;
        // const data = await customerServices();
        // customerData.value = data.data.data;
        // console.log(customerData.value);

        const responseData = await customerServices(
          `?page=${page.value}&limit=${pageTitle.value}`
        );
        customerData.value = responseData.data.data;
        console.log(":::::::customer data", responseData.data.data);
        const pagination = responseData.data.pagination;

        noOfPages.value = Math.ceil(pagination.count / pagination.limit);
        console.log(customerData.value);
        // }, 1000);
      } catch (error) {
        if (error.status === 500) {
          console.log("Internal Server Error");
        }
      }
    };

    getfunction();

    const sortField = async (sortFieldTitle) => {
      console.log(sortFieldTitle);
      const customerValue = await customerServices(
        `?sort={"${sortFieldTitle}":"${order.value}"}`
      );
      if (order.value === "asc") {
        order.value = "desc";
      } else {
        order.value = "asc";
      }
      customerData.value = customerValue.data.data;
      console.log("All Data::::::", customerData.value);
      // // console.log("allItems", allItems.data.data);
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
      console.log("search title", searchTitleKey.value);
      console.log("search value ", search.value);
      const allCustomer = await customerServices(
        `?where={"${searchTitleKey.value}": "${search.value}"}`
      );
      customerData.value = allCustomer.data.data;
      console.log("searchValue::::::::::::::", customerData.value);
    };
    return {
      customerData,
      getfunction,
      headers,
      sortField,
      IsSortingOrderAsc,
      pageNo,
      page,
      onPagination,
      pageTitle,
      noOfPages,
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

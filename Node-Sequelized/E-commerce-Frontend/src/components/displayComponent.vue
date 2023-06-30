<template>
  <!-- <VCard v-if="wishlistItems">
    {{ wishlistItems }}
  </VCard> -->
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
          <tr v-for="customer in customerData" :key="customer.id">
            <td>
              <v-chip label color="red">{{ customer.first_name }} </v-chip>
            </td>
            <td>
              <v-chip label color="blue">{{ customer.last_name }} </v-chip>
            </td>
            <td>
              <v-chip label color="indigo">{{ customer.email }} </v-chip>
            </td>
            <td>
              <v-chip label color="pink">{{ customer.phone_number }} </v-chip>
            </td>
            <td>
              <v-chip label color="black">{{ customer.address }} </v-chip>
            </td>
            <!-- <td>
              <v-btn @click="viewWishList(customer.id)">View WishList</v-btn>
            </td> -->
            <v-dialog v-model="dialog" width="auto">
              <template v-slot:activator="{ props }">
                <v-btn
                  color="green"
                  v-bind="props"
                  @click="viewWishList(customer.id)"
                  >Wish List
                </v-btn>
              </template>
              <v-card>
                <v-card-text>
                  <v-card-text v-if="!wishlistItems">
                    "NO WISH LIST FOUND"
                  </v-card-text>
                  <v-card-text v-else>
                    <!-- {{ wishlistItems }} -->
                    <VTable>
                      <thead>
                        <tr>
                          <th v-for="heading in whislistheaders" :key="heading">
                            <!-- <v-icon icon="mdi-calendar-range-outline"></v-icon> -->
                            <v-chip
                              :prepend-icon="heading.headerIcon"
                              variant="text"
                              >{{ heading.title
                              }}<v-icon
                                icon="mdi-swap-vertical-bold"
                                @click="sortWhishlist(heading.key)"
                              ></v-icon
                            ></v-chip>
                          </th>
                        </tr>
                      </thead>
                      <tbody v-if="wishlistItems">
                        <tr v-for="items in wishlistItems" :key="items.id">
                          <td>
                            <v-chip label color="red"
                              >{{ items.description }}
                            </v-chip>
                          </td>
                          <td>
                            <v-chip label color="blue"
                              >{{ items.price }}
                            </v-chip>
                          </td>
                          <td>
                            <v-chip label color="pink"
                              >{{ items.stock }}
                            </v-chip>
                          </td>
                          <td>
                            <v-chip label color="blue"
                              >{{ items.createdAt }}
                            </v-chip>
                          </td>
                        </tr>
                      </tbody>
                    </VTable>
                  </v-card-text>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="indigo" block @click="dialog = false"
                    >Close Dialog</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </tr>
        </tbody>
      </VTable>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn color="green" v-bind="props">{{ pageTitle }}</v-btn>
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
import { getCustomer, getCustomerDetails } from "@/service/customer.services";

export default {
  name: "AllItems",
  setup() {
    const userId = ref(null);
    const wishlistItems = ref(null);
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
    const dialog = ref("false");
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
        headerIcon: "mdi-email",
      },
      {
        title: "Phone Number",
        align: "end",
        key: "phone_number",
        headerIcon: "mdi-dialpad",
      },
      {
        title: "Address",
        align: "end",
        key: "address",
        headerIcon: "mdi-domain",
      },
    ]);
    const whislistheaders = ref([
      {
        title: "Product Description",
        align: "end",
        key: "description",
        headerIcon: "mdi-calendar-range-outline",
      },
      { title: "Price", align: "end", key: "price", headerIcon: "" },
      {
        title: "Stock",
        align: "end",
        key: "stock",
        headerIcon: "mdi-play-circle-outline",
      },
      {
        title: "Added On",
        align: "end",
        key: "createdAt",
        headerIcon: "mdi-play-circle-outline",
      },
    ]);
    const getfunction = async () => {
      try {
        // setTimeout(async () => {
        loading.value = false;
        // const data = await getCustomer();
        // customerData.value = data.data.data;
        // console.log(customerData.value);

        const responseData = await getCustomer(
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
    const viewWishList = async (id) => {
      userId.value = id;
      const responseData = await getCustomerDetails(`?where={"id":"${id}"}`);
      console.log(
        ":::::::RESPONSE DATA::::::::::::::::",
        responseData.data?.data[0]?.Whishlist?.Products
      );

      wishlistItems.value =
        responseData.data?.data[0]?.Whishlist?.Products || null;
      if (wishlistItems?.value?.length === 0) {
        wishlistItems.value = null;
      }
      console.log(wishlistItems.value);
    };
    getfunction();

    const sortField = async (sortFieldTitle) => {
      console.log(sortFieldTitle);
      const customerValue = await getCustomer(
        `?sort={"${sortFieldTitle}":"${order.value}"}`
      );
      if (order.value === "asc") {
        order.value = "desc";
      } else {
        order.value = "asc";
      }
      customerData.value = customerValue.data.data;
      console.log("All Data::::::", customerData.value);
    };
    const sortWhishlist = async (sortField) => {
      console.log(sortField);
      const responseData = await getCustomerDetails(
        `?where={"id":"${userId.value}"}&sort={"${sortField}":"${order.value}"}`
      );
      if (order.value === "asc") {
        order.value = "desc";
      } else {
        order.value = "asc";
      }
      wishlistItems.value = responseData.data?.data[0]?.Whishlist?.Products;
      console.log(responseData.data.data);
    };
    const onPagination = (no) => {
      pageTitle.value = no;
      page.value = 1;
      getfunction();
    };
    const searchInItems = (key, title) => {
      searchTitleKey.value = key;
      searchTitle.value = title;
    };

    const searchItem = async () => {
      console.log("search title", searchTitleKey.value);
      console.log("search value ", search.value);
      const allCustomer = await getCustomer(
        `?where={"${searchTitleKey.value}": "${search.value}"}`
      );
      customerData.value = allCustomer.data.data;
      console.log("searchValue::::::::::::::", customerData.value);
    };
    return {
      userId,
      whislistheaders,
      sortWhishlist,
      dialog,
      customerData,
      wishlistItems,
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
      viewWishList,
    };
  },
};
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>

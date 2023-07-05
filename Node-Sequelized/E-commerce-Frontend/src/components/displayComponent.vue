<template>
  <VCard class="pa-10 ma-10">
    <VCard class="ma-10 pa-10" v-if="!customerData">
      <h1>No Customer found at this moment</h1>
    </VCard>
    <v-card v-else>
      <div>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props">Search List</v-btn>
            <!-- <v-chip label v-if="searchTitle" color="primary">{{
              searchTitle
            }}</v-chip> -->
          </template>
          <ChildComponent :data="item" :getData="getData" />
          <v-list>
            <v-list-item
              v-for="(item, index) in SearchTags"
              :key="index"
              @click="searchInData(item.key, item.title), addComponent()"
              :value="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div v-for="item in count" :key="item">
        <VTextField
          v-model="search[item - 1]"
          append-icon="mdi-magnify"
          :label="searchItemTag[item - 1].title"
          single-line
          hide-details
          @keyup="searchItem()"
        ></VTextField>
      </div>

      <VTable>
        <thead>
          <tr>
            <th v-for="heading in headers" :key="heading">
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
              <v-chip label color="red"
                >{{ customer.id }}{{ customer.first_name }}
              </v-chip>
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
            <td>
              <v-dialog v-model="dialog1" width="auto">
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
                      <h1>NO WISH LIST FOUND</h1>
                    </v-card-text>
                    <v-card-text v-else>
                      <VTable>
                        <thead>
                          <tr>
                            <th
                              v-for="heading in whislistheaders"
                              :key="heading"
                            >
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
                    <v-btn color="indigo" block @click="dialog1 = false"
                      >Close Dialog</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </td>
            <td>
              <v-dialog v-model="dialog2" width="auto">
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="green"
                    v-bind="props"
                    @click="viewCartDetails(customer.id)"
                    >Cart Details
                  </v-btn>
                </template>
                <v-card>
                  <v-card-text>
                    <v-card-text v-if="!cartItems">
                      <h1>NO CART DETAILS FOUND</h1>
                    </v-card-text>
                    <v-card-text v-else>
                      <VTable>
                        <thead>
                          <tr>
                            <th
                              v-for="heading in whislistheaders"
                              :key="heading"
                            >
                              <v-chip
                                :prepend-icon="heading.headerIcon"
                                variant="text"
                                >{{ heading.title
                                }}<v-icon
                                  icon="mdi-swap-vertical-bold"
                                  @click="sortCartDetails(heading.key)"
                                ></v-icon
                              ></v-chip>
                            </th>
                          </tr>
                        </thead>
                        <tbody v-if="cartItems">
                          <tr v-for="items in cartItems" :key="items.id">
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
                    <v-btn color="indigo" block @click="dialog2 = false"
                      >Close Dialog</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </td>
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
import {
  getCustomer,
  getCustomerDetails,
  getCartDetails,
} from "@/service/customer.services";

export default {
  name: "AllItems",
  setup() {
    const count = ref(0);
    const searchingObj = ref([]);
    const searchItemTag = ref([]);
    const SearchTags = ref([
      { title: "First Name", align: "end", key: "first_name", headerIcon: "" },
      {
        title: "Last Name",
        align: "end",
        key: "last_name",
        headerIcon: "mdi-play-circle-outline",
      },
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
    const userId = ref(null);
    const wishlistItems = ref(null);
    const cartItems = ref(null);
    const loading = ref(true);
    const customerData = ref(null);
    const IsSortingOrderAsc = ref(true);
    const pageNo = ref([1, 2, 5, 10]);
    const pageTitle = ref(5);
    const noOfPages = ref(null);
    const page = ref(1);
    const searchTitle = ref(null);
    const searchTitleKey = ref(null);
    const search = ref([]);
    const order = ref("asc");
    const dialog1 = ref(false);
    const dialog2 = ref(false);
    const searchingKeys = ref[null];
    const addComponent = () => {
      count.value = count.value + 1;
    };
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
        // console.log(":::::::customer data", responseData.data.data);
        const pagination = responseData.data.pagination;

        noOfPages.value = Math.ceil(pagination.count / pagination.limit);
        // console.log(customerData.value);
        // }, 1000);
      } catch (error) {
        if (error.status === 500) {
          // console.log("Internal Server Error");
        }
      }
    };
    const viewWishList = async (id) => {
      userId.value = id;
      const responseData = await getCustomerDetails(`?where={"id":"${id}"}`);
      // console.log(
      //   ":::::::RESPONSE DATA::::::::::::::::",
      //   responseData.data?.data[0]?.Whishlist?.Products
      // );

      wishlistItems.value =
        responseData.data?.data[0]?.Whishlist?.Products || null;
      if (wishlistItems?.value?.length === 0) {
        wishlistItems.value = null;
      }
      // console.log(wishlistItems.value);
    };
    const searchInData = async (key, title) => {
      console.log("key::::::::::", key);
      console.log("title::::::::::", title);
      SearchTags.value.splice(
        SearchTags.value.findIndex((tag) => tag.key === key),
        1
      );
      console.log("::::::::::::::AFTER FILTER:::::::", SearchTags.value);

      searchItemTag.value.push({ title: title, key: key });
      searchTitleKey.value = key;
      searchTitle.value = title;
      console.log(
        ":::::::::::;SEARCH ITEM TAG:::::::::::",
        searchItemTag.value
      );

      searchingObj.value.push({ searchTitleKey: key, searchTitle: title });
    };
    const viewCartDetails = async (id) => {
      userId.value = id;
      const responseData = await getCartDetails(`?where={"id":"${id}"}`);
      // console.log("::::::::CART DATA::::::::", responseData.data);
      cartItems.value = responseData.data?.data[0]?.Cart?.cart;
      if (cartItems?.value?.length === 0) {
        cartItems.value = null;
      }
      // console.log(cartItems.value);
    };
    getfunction();

    const sortField = async (sortFieldTitle) => {
      // console.log(sortFieldTitle);
      const customerValue = await getCustomer(
        `?sort={"${sortFieldTitle}":"${order.value}"}`
      );
      if (order.value === "asc") {
        order.value = "desc";
      } else {
        order.value = "asc";
      }
      customerData.value = customerValue.data.data;
      // console.log("All Data::::::", customerData.value);
    };
    const sortCartDetails = async (sortField) => {
      const responseData = await getCartDetails(
        `?where={"id":"${userId.value}"}&sort={"${sortField}":"${order.value}"}`
      );
      cartItems.value = responseData.data?.data[0]?.Cart?.cart;
      if (order.value === "asc") {
        order.value = "desc";
      } else {
        order.value = "asc";
      }
      // console.log(responseData);
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
      console.log(":::::::sortWishlist:::::::::::", responseData);
      // wishlistItems.value = responseData.data?.data[0]?.Whishlist?.Products;
    };
    const onPagination = (no) => {
      pageTitle.value = no;
      page.value = 1;
      getfunction();
    };
    const searchInItems = (key, title) => {
      searchingObj.value.push({ searchTitleKey: key, searchTitle: title });
      // searchTitleKey.value = key;
      // searchTitle.value = title;
    };

    const searchItem = async () => {
      let obj = {};
      searchingObj.value.forEach(async (searchObj, index) => {
        console.log(
          "!!!!!!!!!",
          (obj[searchObj.searchTitleKey] = search.value[index])
        );
        obj[searchObj.searchTitleKey] = search.value[index];
        const allCustomer = await getCustomer(`?where=${JSON.stringify(obj)}`);
        console.log(":::::::search responce:::::::", allCustomer);
        customerData.value = allCustomer.data.data;
      });
    };
    return {
      searchingObj,
      searchItemTag,
      addComponent,
      count,
      searchingKeys,
      userId,
      searchInData,
      sortCartDetails,
      cartItems,
      whislistheaders,
      sortWhishlist,
      dialog1,
      dialog2,
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
      viewCartDetails,
      SearchTags,
    };
  },
};
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>

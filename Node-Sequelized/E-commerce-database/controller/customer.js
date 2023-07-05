const {
  Customer,
  Product,
  Cart,
  Order,
  Whishlist,
  Payment,
  Shipment,

  Sequelize,
  sequelize,
} = require("../models");

const Op = Sequelize.Op;

const getCustomerFromDB = async (req, res) => {
  try {
    const order = [];
    const pagination = {
      count: null,
      page: 1,
      limit: 5,
      offset: 0,
    };
    var seachOn = null;
    var searchValue = null;
    if (!isNaN(req.query.page) && parseInt(req.query.page) >= 0) {
      pagination.page = parseInt(req.query.page);
    }

    if (!isNaN(req.query.limit) && req.query.limit >= 0) {
      pagination.limit = parseInt(req.query.limit);
    }

    pagination.offset = (pagination.page - 1) * pagination.limit;
    if (req.query.where) {
      var searchField = JSON.parse(req.query.where);
      const searchObject = [];
      console.log(":::::::SEARCH FIELD:::::::::", searchField);
      const keys = Object.keys(searchField);
      console.log("::::::::::KEYS:::::::::", keys);
      const values = Object.values(searchField);
      console.log(":::::VALUES::::::", values);
      seachOn = searchField[0];
      searchValue = searchField[1];
      const query = keys.forEach((i, index) => [
        searchObject.push({ [i]: { [Op.like]: `%${values[index]}%` } }),
      ]);
      console.log(":::::::SEARCH OBJECT::::::", searchObject);
      var searchCondition = {
        [Op.and]: searchObject,
      };
      console.log("searchCOndition::::::::::::", searchCondition);
    }
    if (req.query.sort) {
      const sortField = Object.entries(JSON.parse(req.query.sort))[0];
      order.push([[sortField[0], sortField[1]]]);
    }

    const { count, rows } = await Customer.findAndCountAll({
      where: searchCondition,
      limit: pagination.limit,
      offset: pagination.offset,
      order: order,
    });

    pagination.count = count;
    return res.json({ data: rows, pagination: pagination });
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};
const getCustomerRecords = async (req, res) => {
  const searchText = "Huel";
  const searchCondition = {
    [Op.or]: [
      { first_name: { [Op.like]: `%${searchText}%` } },
      { last_name: { [Op.like]: `%${searchText}%` } },
      { email: { [Op.like]: `%${searchText}%` } },
      { address: { [Op.like]: `%${searchText}%` } },
      { phone_number: { [Op.like]: `%${searchText}%` } },
    ],
  };

  const response = await Customer.findAll({
    where: searchCondition,
    include: [
      {
        model: Cart,
        attributes: ["id", "quantity", "product_id", "customer_id"],
      },
      {
        model: Whishlist,
        attributes: ["id", "product_id", "customer_id"],
      },
      {
        model: Payment,
        attributes: [
          "id",
          "payment_date",
          "payment_method",
          "amount",
          "customer_id",
        ],
      },
      {
        model: Shipment,
        attributes: [
          "id",
          "shipment_date",
          "address",
          "city",
          "state",
          "country",
          "zip_code",
          "customer_id",
        ],
      },
    ],
    limit: 10,
  });
  console.log(JSON.parse(JSON.stringify(response[0].dataValues)));
  return res.json({ data: rows, pagination: pagination });
  // return res.json(response[0].dataValues);
};

const getAllCustomerRecords = async (req, res) => {
  const response = await Customer.findAll();
  return res.json(response);
};

const getDetailsOfCustomer = async (req, res) => {
  try {
    let orderField = "id";
    let order = "desc";
    const pagination = {
      count: null,
      page: 1,
      limit: 10,
      offset: 0,
    };

    if (!isNaN(req.query.page) && parseInt(req.query.page) >= 0) {
      pagination.page = parseInt(req.query.page);
    }

    if (!isNaN(req.query.limit) && req.query.limit >= 0) {
      pagination.limit = parseInt(req.query.limit);
    }

    pagination.offset = (pagination.page - 1) * pagination.limit;

    if (req.query.where) {
      var searchField = Object.entries(JSON.parse(req.query.where))[0];
      var searchCondition = {
        [Op.or]: [{ id: { [Op.like]: "%" + searchField[1] + "%" } }],
      };
      // console.log("searchCondition::::::::::::", searchCondition);
    }
    if (req.query.sort) {
      const sortField = Object.entries(JSON.parse(req.query.sort))[0];
      // console.log(":::::::::sortfield::::::::::::", sortField);
      orderField = sortField[0];
      orderField = sortField[1];
    }
    // console.log(":::::::::order:::::::", orderList);
    const { count, rows } = await Customer.findAndCountAll({
      where: searchCondition,
      limit: pagination.limit,
      offset: pagination.offset,
      // order: orderList,
      include: [
        {
          model: Whishlist,
          include: [
            {
              model: Product,
              // order: orderList,
              // limit: pagination.limit,
            },
          ],
          order: [[{ model: Whishlist }, { model: Product }, "id", "desc"]],
        },
      ],
    });

    pagination.count = count;
    // return res.json(rows);
    return res.json({ data: rows, pagination: pagination });
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

const getCartDetails = async (req, res) => {
  try {
    const orderList = [];
    let orderField = "id";
    let order = "desc";
    const pagination = {
      count: null,
      page: 1,
      limit: 10,
      offset: 0,
    };

    if (!isNaN(req.query.page) && parseInt(req.query.page) >= 0) {
      pagination.page = parseInt(req.query.page);
    }

    if (!isNaN(req.query.limit) && req.query.limit >= 0) {
      pagination.limit = parseInt(req.query.limit);
    }

    pagination.offset = (pagination.page - 1) * pagination.limit;

    if (req.query.where) {
      var searchField = Object.entries(JSON.parse(req.query.where))[0];
      var searchCondition = {
        [Op.or]: [{ id: { [Op.like]: "%" + searchField[1] + "%" } }],
      };
      console.log("searchCondition::::::::::::", searchCondition);
    }
    if (req.query.sort) {
      const sortField = Object.entries(JSON.parse(req.query.sort))[0];
      console.log(":::::::::sortfield::::::::::::", sortField);
      orderList.push(sortField[0]);
      orderList.push(sortField[1]);
      orderField = sortField[0];
      order = sortField[1];
    }
    // console.log(":::::::::order:::::::", sortField[0], sortField[1]);
    const { count, rows } = await Customer.findAndCountAll({
      where: searchCondition,
      // limit: pagination.limit,
      offset: pagination.offset,
      // order: orderList,

      include: [
        {
          model: Cart,
          // as: "cart",

          include: [
            {
              model: Product,
              as: "cart",
              through: "Cart_Product",
            },
          ],
        },
      ],
      limit: pagination.limit,
      order: [
        [{ model: Cart }, { model: Product, as: "cart" }, orderField, order],
      ],
    });

    pagination.count = count;
    return res.json({ data: rows, pagination: pagination });
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};
module.exports = {
  getCustomerFromDB,
  getCustomerRecords,
  getAllCustomerRecords,
  getDetailsOfCustomer,
  getCartDetails,
};

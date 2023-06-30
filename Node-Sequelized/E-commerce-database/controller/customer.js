const {
  Customer,
  Product,
  Cart,
  Order,
  Whishlist,
  Payment,
  Shipment,

  Sequelize,
} = require("../models");

const Op = Sequelize.Op;

const getCustomerFromDB = async (req, res) => {
  try {
    const allowField = [
      "id",
      "first_name",
      "last_name",
      "email",
      "phone_number",
      "address",
    ];
    const order = [];
    const pagination = {
      count: null,
      page: 1,
      limit: 5,
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
        [Op.or]: [
          { first_name: { [Op.like]: "%" + searchField[1] + "%" } },
          { last_name: { [Op.like]: "%" + searchField[1] + "%" } },
          { email: { [Op.like]: "%" + searchField[1] + "%" } },
          { address: { [Op.like]: "%" + searchField[1] + "%" } },
          { phone_number: { [Op.like]: "%" + searchField[1] + "%" } },
        ],
      };
      console.log("searchCOndition::::::::::::", searchCondition);
    }
    if (req.query.sort) {
      const sortField = Object.entries(JSON.parse(req.query.sort))[0];
      order.push([[sortField[0], sortField[1]]]);
    }
    console.log("::::::::::order123:::::::", order);
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
  return res.json(response[0].dataValues);
};

const getAllCustomerRecords = async (req, res) => {
  const response = await Customer.findAll();
  return res.json(response);
};

const getDetailsOfCustomer = async (req, res) => {
  try {
    const orderList = [];
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
      orderList.push([[sortField[0], sortField[1]]]);
    }
    console.log(":::::::::order:::::::", orderList);
    const { count, rows } = await Customer.findAndCountAll({
      where: searchCondition,
      limit: pagination.limit,
      offset: pagination.offset,
      order: orderList,
      include: [
        {
          model: Whishlist,
          include: [
            {
              model: Product,
              order: orderList,
              limit: pagination.limit,
            },
          ],
          // order: [[{ model: Product }, "id", "desc"]],
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

// const getCartDetails = async (req, res) => {
//   try {
//     const orderList = [];
//     const pagination = {
//       count: null,
//       page: 1,
//       limit: 10,
//       offset: 0,
//     };

//     if (!isNaN(req.query.page) && parseInt(req.query.page) >= 0) {
//       pagination.page = parseInt(req.query.page);
//     }

//     if (!isNaN(req.query.limit) && req.query.limit >= 0) {
//       pagination.limit = parseInt(req.query.limit);
//     }

//     pagination.offset = (pagination.page - 1) * pagination.limit;

//     if (req.query.where) {
//       var searchField = Object.entries(JSON.parse(req.query.where))[0];
//       var searchCondition = {
//         [Op.or]: [{ id: { [Op.like]: "%" + searchField[1] + "%" } }],
//       };
//       console.log("searchCondition::::::::::::", searchCondition);
//     }
//     if (req.query.sort) {
//       const sortField = Object.entries(JSON.parse(req.query.sort))[0];
//       console.log(":::::::::sortfield::::::::::::", sortField);
//       orderList.push([[sortField[0], sortField[1]]]);
//     }
//     console.log(":::::::::order:::::::", orderList);
//     const { count, rows } = await Customer.findAndCountAll({
//       where: searchCondition,
//       // limit: pagination.limit,
//       offset: pagination.offset,
//       order: orderList,
//       include: [
//         {
//           model: Cart,
//           as: "cart",
//           include: [
//             {
//               model: Product,
//               as: "products",
//               // order: orderList,
//               // limit: pagination.limit,
//             },
//           ],
//           order: [[{ model: Product }, "id", "desc"]],
//         },
//       ],
//     });

//     pagination.count = count;
//     // return res.json(rows);
//     return res.json({ data: rows, pagination: pagination });
//   } catch (error) {
//     console.log(error);
//     res.json(error.message);
//   }
// };
module.exports = {
  getCustomerFromDB,
  getCustomerRecords,
  getAllCustomerRecords,
  getDetailsOfCustomer,
  getCartDetails,
};

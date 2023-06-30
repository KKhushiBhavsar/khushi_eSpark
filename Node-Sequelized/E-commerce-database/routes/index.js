var express = require("express");
const { route } = require("express/lib/application");
var router = express.Router();

var customerComponent = require("../controller/customer");
router.get("/get-customer", customerComponent.getCustomerRecords);
router.get("/all-customer", customerComponent.getAllCustomerRecords);

router.get("/get-customers", customerComponent.getCustomerFromDB);
router.get("/user-data", customerComponent.getDetailsOfCustomer);

router.get("/user-cart", customerComponent.getCartDetails);
module.exports = router;

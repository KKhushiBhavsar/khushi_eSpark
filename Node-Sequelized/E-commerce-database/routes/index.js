var express = require("express");
var router = express.Router();

var cartComponent = require("../controller/cart");
var categoryComponent = require("../controller/category");
var customerComponent = require("../controller/customer");
var orderComponent = require("../controller/order");
var orderItemComponent = require("../controller/orderitem");
var paymentComponent = require("../controller/payment");
var productComponent = require("../controller/product");
var shipmentComponent = require("../controller/shipment");
var whishlistComponent = require("../controller/whishlist");

/* cart component routes */
router.post("/cart", cartComponent.addToCart);
router.get("/cart", cartComponent.listAllCartItems);
module.exports = router;

/* category component routes*/
router.post("/category", categoryComponent.addCategory);
router.get("/category", categoryComponent.listCategory);

/* customer component routes */
router.post("/user", customerComponent.addCustomer);
router.get("/user", customerComponent.listAllCustomer);

/* order component routes*/
router.post("/order", orderComponent.addOrder);

router.get("/order", orderComponent.listAllOrders);

/* order item component routes*/
router.get("/orderItem", orderItemComponent.listOrderItems);

/* payment component routes */
router.post("/payment", paymentComponent.addPayment);
router.get("/payment", paymentComponent.listPayment);

/* product component routes */
router.post("/product", productComponent.addProductToList);
router.get("/product", productComponent.listOfProducts);

/* shipment component routes */
router.post("/shipment", shipmentComponent.addShipmentDetails);
router.get("/shipment", shipmentComponent.getShipmentDetails);

/* whishlist component routes */
router.get("/whishlist", whishlistComponent.listAllWishList);
router.post("/whishlist", whishlistComponent.addToWhishlist);

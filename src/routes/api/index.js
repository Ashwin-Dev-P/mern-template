const express = require("express");
const router = express.Router();

//import controller
const shared_controllers = require("../../controllers/shared.controller");

//import routes
const test_routes = require("./test.route");

router.use("/test", test_routes);

//Method or route not found
router.all("*", shared_controllers.method_not_found_controller);

module.exports = router;

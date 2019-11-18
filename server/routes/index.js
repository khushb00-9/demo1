let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");

/* POST - processes the Login Page */
router.post("/login", indexController.processLoginPage);

/* GET - displays the User Registration Page */
//router.get('/register', indexController.displayRegisterPage);

/* POST - processes the User Registration Page */
router.post("/register", indexController.processRegisterPage);

/* GET - perform user logout */
router.get("/logout", indexController.performLogout);

module.exports = router;

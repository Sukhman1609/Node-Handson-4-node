const { login, register } = require("../controller/categoriesController");
const auth = require("../middleware/auth");


const categoryRoute=require("express").Router();

categoryRoute.post("/login",login)
categoryRoute.post("/register",register)
module.exports=categoryRoute

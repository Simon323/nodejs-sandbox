const express = require("express");
const { getAddProduct, postAddProduct } = require("../controllers/shop");

const router = express.Router();

router.get("/add-product", getAddProduct);

router.post("/add-product", postAddProduct);

router.get("/products", postAddProduct);

module.exports = router;

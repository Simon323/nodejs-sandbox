const express = require("express");
const { getProducts } = require("../controllers/shop");

const router = express.Router();

router.get("/", getProducts);

router.get("/products", getProducts);

router.get("/cart", getProducts);

router.get("/checkout", getProducts);

module.exports = router;

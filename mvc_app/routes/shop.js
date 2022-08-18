// const express = require("express");

import express from "express";

const {
  getProducts,
  getIndex,
  getCart,
  getCheckout,
} = require("../controllers/shop");

const router = express.Router();

router.get("/", getIndex);

router.get("/products", getProducts);

router.get("/cart", getCart);

router.get("/checkout", getCheckout);

module.exports = router;

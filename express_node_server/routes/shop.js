const path = require("path");
const express = require("express");
const rootDir = require("../util/path");
const { products } = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  console.log(products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;

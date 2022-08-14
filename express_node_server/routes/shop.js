const express = require("express");
const { products } = require("./admin");

// Return html view
// const path = require("path");
// const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  // --> HTML <--
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  // res.sendFile(path.join(rootDir, "views", "shop.html"));

  // --> PUG <--
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
});

module.exports = router;

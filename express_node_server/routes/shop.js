const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("This is another middleware");
  res.send("<h1>Hello form expres</h1>");
});

module.exports = router;

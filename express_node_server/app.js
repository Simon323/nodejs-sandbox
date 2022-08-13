const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use("/", (req, res, next) => {
//   console.log("This always run");
//   next();
// });

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/add-product", (req, res, next) => {
  console.log("This is another middleware");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title' /><button type='submit'>submit</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("This is another middleware");
  res.send("<h1>Hello form expres</h1>");
});

app.listen(3000);

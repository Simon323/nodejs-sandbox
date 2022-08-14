const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const rootDir = require("./util/path");
const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const { routes } = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// app.use("/", (req, res, next) => {
//   console.log("This always run");
//   next();
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // --> HTML <--
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html"));

  // --> PUG <--
  res.status(404).render("404", { pageTitle: "Page not found" });
});

app.listen(3000);

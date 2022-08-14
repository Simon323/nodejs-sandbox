const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const rootDir = require("./util/path");
const { engineType, setViewEngine } = require("./util/viewEngine");

const app = express();

setViewEngine(app, engineType.EJS);

// ROUTES
const { routes } = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// EACH TIME MIDDLEWARE
// app.use("/", (req, res, next) => {
//   console.log("This always run");
//   next();
// });

// MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, "public")));

// ROUTES
app.use("/admin", routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // --> HTML <--
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html"));

  // --> PUG / HANDLEBARS <--
  res.status(404).render("404", { pageTitle: "Page not found" });
});

app.listen(3000);

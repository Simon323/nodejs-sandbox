const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const rootDir = require("./util/path");
const { engineType, setViewEngine } = require("./util/viewEngine");
const { get404 } = require("./controllers/error");

const app = express();

setViewEngine(app, engineType.EJS);

// ROUTES
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, "public")));

// ROUTES
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// Errors
app.use(get404);

app.listen(3000);

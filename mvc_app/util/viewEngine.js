const { engine } = require("express-handlebars");

const engineType = Object.freeze({
  PUG: "PUG",
  HANDLEBARS: "HANDLEBARS",
  EJS: "ESJ",
});

const setViewEngine = (app, engineName) => {
  switch (engineName) {
    case engineType.PUG: {
      // Templates Engine PUG
      console.log("PUG is ViewEngine");
      app.set("view engine", "pug");
      app.set("views", "views/pug");
      break;
    }
    case engineType.HANDLEBARS: {
      // Templates Engine HANDLEBARS
      console.log("HANDLEBARS is ViewEngine");
      app.engine(
        "handlebars",
        engine({
          layoutsDir: "views/handlebars/layouts/",
          defaultLayout: "main",
        }) //in version 6.x no need pass config object
      );
      app.set("view engine", "handlebars");
      app.set("views", "views/handlebars");
      break;
    }
    case engineType.EJS: {
      // Templates Engine EJS
      console.log("EJS is ViewEngine");
      app.set("view engine", "ejs");
      app.set("views", "views");
      break;
    }
  }
};

module.exports = {
  engineType,
  setViewEngine,
};

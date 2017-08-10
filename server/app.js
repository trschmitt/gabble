const fs = require("fs");
const path = require("path");
const url = require("url");
const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const morgan = require("morgan");
const session = require("express-session");
mongoose.Promise = require("bluebird");
const sequelize = require('sequelize');

const app = express();

app.set("port", process.env.PORT || 3000);


app.use("/public", express.static(path.join(__dirname, "public")));

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(expressValidator());
app.use(morgan("dev"));

app.use(
  session({
    secret: "gabbleisthebest4ppev4rcreatedbruh-3495876349",
    resave: false,
    saveUninitialized: false
  })
);


app.use("/", require("./routes/homepage"));

if (require.main === module) {
  app.listen(app.get("port"), err => {
    if (err) {
      throw err;
      exit(1);
    }

    console.log(
      `Node running in ${app.get("env")} mode @ http://localhost:${app.get(
        "port"
      )}`
    );
  });
}

module.exports = app;

const express = require("express"),
  mongoose = require("mongoose"),
  cookieSession = require("cookie-session"),
  passport = require("passport"),
  keys = require("./config/keys"),
  ejs = require("ejs"),
  bodyParser = require("body-parser");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);
const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./models/user");
require("./services/passport");
require("./routes/authRoutes")(app);
require("./routes/pageRoutes")(app);
require("./routes/billingRoutes")(app);

app.set("view engine", "ejs");

var passportConfig = require("./services/passport");

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("server is running");

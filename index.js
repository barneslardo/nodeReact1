const express = require("express"),
  mongoose = require("mongoose"),
  cookieSession = require("cookie-session"),
  passport = require("passport"),
  keys = require("./config/keys"),
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
require("./routes/billingRoutes")(app);

var passportConfig = require("./services/passport");

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assests like main.js file or main.css file
  app.use(express.static("client/build"));
  // Express will serve up index.html file if it doesn't recongnize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("server is running");

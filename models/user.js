const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  displayName: String,
  givenName: String,
  familyName: String,
  url: String
});

mongoose.model("users", userSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  displayName: String,
  givenName: String,
  familyName: String,
  url: String,
  credits: { type: Number, default: 0 }
});

mongoose.model("users", userSchema);

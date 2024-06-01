const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  ID: { type: Number, unique: true },
  name: { type: String, required: true },
  familyname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phonenumber: { type: String, required: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

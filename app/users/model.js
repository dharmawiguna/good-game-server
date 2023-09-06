const mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Email is require!"],
    },
    name: {
      type: String,
      require: [true, "Name is require!"],
    },
    password: {
      type: String,
      require: [true, "Password is require!"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "admin",
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    phoneNumber: {
      type: String,
      require: [true, "Password is require!"],
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("User", userSchema);

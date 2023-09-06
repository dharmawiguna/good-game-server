const mongoose = require("mongoose");

let bankSchema = mongoose.Schema(
  {
    ownerName: {
      type: String,
      require: [true, "Account Owner Name is require"],
    },
    bankName: {
      type: String,
      require: [true, "Bank Name is require"],
    },
    accountNumber: {
      type: String,
      require: [true, "Account Number is require!"],
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Bank", bankSchema);

const mongoose = require("mongoose");

let transactionSchema = mongoose.Schema(
  {
    historyVoucherTopup: {
      gameName: {
        type: String,
        require: [true, "Game name is require!"],
      },
      category: {
        type: String,
        require: [true, "Category is require!"],
      },
      thumbnail: {
        type: String,
      },
      coinName: {
        type: String,
        require: [true, "Coin Name is require!"],
      },
      coinQuantity: {
        type: String,
        require: [true, "Coin Quantity is require!"],
      },
      price: {
        type: Number,
      },
    },

    historyPayment: {
      name: { type: String, require: [true, "Name is require!"] },
      type: { type: String, require: [true, "Type is require!"] },
      bankName: { type: String, require: [true, "Bank Name is require!"] },
      accountNumber: {
        type: String,
        require: [true, "Account Number is require!"],
      },
    },

    name: {
      type: String,
      require: [true, "Name Quantity is require!"],
      maxLength: [255, "Length must be between 3 - 255 character"],
      minLength: [3, "Length must be between 3 - 255 character"],
    },

    accountUser: {
      type: String,
      require: [true, "Account User is require"],
      maxLength: [255, "Length must be between 3 - 255 character"],
      minLength: [3, "Length must be between 3 - 255 character"],
    },

    tax: {
      type: Number,
      default: 0,
    },

    value: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },

    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },

    historyUser: {
      name: { type: String, require: [true, "Name is require!"] },
      phoneNumber: {
        type: Number,
        require: [true, "Name is require!"],
        maxLength: [13, "Length must be between 3 - 255 character"],
        minLength: [9, "Length must be between 3 - 255 character"],
      },
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);

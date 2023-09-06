const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const HASH_ROUND = 10;

let playerSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Email is require!"],
    },
    name: {
      type: String,
      require: [true, "Name is require!"],
      maxLength: [255, "Length must be between 3 - 255 character"],
      minLength: [3, "Length must be between 3 - 255 character"],
    },
    username: {
      type: String,
      require: [true, "Name is require!"],
      maxLength: [255, "Length must be between 3 - 255 character"],
      minLength: [3, "Length must be between 3 - 255 character"],
    },
    password: {
      type: String,
      require: [true, "Password is require!"],
      maxLength: [8, "Length must be between 4 - 8 character"],
      minLength: [4, "Length must be between 4 - 8 character"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    avatar: {
      type: String,
    },
    filename: {
      type: String,
    },
    phoneNumber: {
      type: String,
      require: [true, "Password is require!"],
      maxLength: [13, "Length must be between 9 - 13 character"],
      minLength: [9, "Length must be between 9 - 13 character"],
    },

    favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamp: true }
);

playerSchema.path("email").validate(
  async function (value) {
    try {
      const count = await this.model("Player").countDocuments({ email: value });

      return !count;
    } catch (error) {
      throw error;
    }
  },
  (attr) => `${attr.value} has been registered!`
);

playerSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, HASH_ROUND);
  next();
});

module.exports = mongoose.model("Player", playerSchema);

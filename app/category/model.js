const mongoose = require("mongoose");

let categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Category name is require"],
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Category", categorySchema);

const Player = require("./model");
const Voucher = require("../voucher/model");

module.exports = {
  landingPage: async (req, res) => {
    try {
      const voucher = await Voucher.find()
        .select("_id name category thumbnail status")
        .populate("category");

      res.status(200).json({ data: voucher });
    } catch (error) {
      res
        .status(500)
        .json({ message: error.message || "Internal Server Error" });
    }
  },
};

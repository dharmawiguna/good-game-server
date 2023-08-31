module.exports = {
  index: async (req, res) => {
    try {
      res.render("index", { title: "Dharma Express" });
    } catch (error) {
      console.log(error);
    }
  },
};

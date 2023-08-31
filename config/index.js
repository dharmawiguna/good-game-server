const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  servicesName: process.env.SERVICE_NAME,
  urlDb: process.env.MONGO_URL,
};

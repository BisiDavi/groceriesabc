//next.config.js
const withImages = require("next-images");
require("dotenv").config();

module.exports = withImages({
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    DB_NAME: process.env.DB_NAME,
    SITE_NAME:process.env.SITE_NAME,
    SESSION_SECRET: process.env.SESSION_SECRET,
  }
});

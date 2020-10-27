//next.config.js
const withImages = require("next-images");
require("dotenv").config();

module.exports = withImages({
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    DB_NAME: process.env.DB_NAME,
    EMAIL_FROM: process.env.EMAIL_FROM,
    SESSION_SECRET: process.env.SESSION_SECRET,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  }
});

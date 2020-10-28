export const siteNameEnvironment =
  process.env.NODE_ENV === "production"
    ? process.env.SITE_NAME
    : "http://localhost:3000";

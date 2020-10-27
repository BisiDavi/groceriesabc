import nextConnect from "next-connect";
import dbConnect from "./database";
import session from "./session";
import passport from "../lib/passport";

const middleware = nextConnect();

middleware
  .use(dbConnect)
  .use(session)
  .use(passport.initialize())
  .use(passport.session());

export default middleware;

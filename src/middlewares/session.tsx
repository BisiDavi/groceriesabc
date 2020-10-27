import  session from 'express-session';
import connectMongo from 'connect-mongo';

const MongoStore = connectMongo(session);

const sessionMiddleware = (req,res,next) : void => {
  const mongoStore = new MongoStore({
    client: req.dbClient,
    stringify:false
  });
  return session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: mongoStore,
  })(req,res, next)
}

export default sessionMiddleware;
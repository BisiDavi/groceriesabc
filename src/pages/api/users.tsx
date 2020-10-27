import { NextApiRequest, NextApiHandler, NextApiResponse } from "next";
import { verify } from "jsonwebtoken";
import dbConnect from "../../middlewares/database";
import User from "../../models/User";
import { secret } from "./secret";

export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => { 
  verify(req.cookies.auth!, secret, async function (err, decoded) {
    if (!err && decoded) {
      return await fn(req, res);
    }
    res.status(401).json({ message: "Sorry you are not authenticated" });
  });
};

export default authenticated(async function getUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  const users = await User.find({});
  res.status(200).json({ success: true, data: users });
});

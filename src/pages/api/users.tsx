import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../middlewares/database";
import User from "../../models/User";
import { authenticated } from "../../components/routeAuthenticate";

export default authenticated(async function getUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  const users = await User.find({});
  res.status(200).json({ success: true, data: users });
});

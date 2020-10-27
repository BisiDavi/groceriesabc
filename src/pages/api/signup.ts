import { hash } from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";

import User from "../../models/User";
import dbConnect from "../../middlewares/database";

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "POST":
      try {
        hash(req.body.password, 10, async function (err, hash) {
          const user = await User.create(req.body.name, req.body.email, hash);
          res.status(201).json({ success: true, data: user });
        });
      } catch (error) {
        res
          .status(400)
          .json({ success: false, message: "we only support post" });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}

import { hash } from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";
import User from "../../models/User";
import dbConnect from "../../middlewares/database";

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { name, email, password } = req.body;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false, message: "error" });
      }
      break;
    case "POST":
      const existingEmail: string = await User.findOne({ email: email });
      console.log(existingEmail)
      if (!existingEmail) {
        try {
          hash(password, 10, async function (err, hash: any) {
            const user = await User.create({
              name,
              email,
              password: hash
            });
            res.status(201).json(user);
          });
        } catch (error) {
          res
            .status(400)
            .json({ success: false, message: "something is wrong with your sign up" });
        }
      } else {
        res
          .status(400)
          .json({
            message: "You aleady, have an account with us, please Sign-in."
          });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}

import { compare } from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";
import { sign } from "jsonwebtoken";
import cookie from "cookie";
import { secret } from "../api/secret";
import User from "../../models/User";
import dbConnect from "../../middlewares/database";

export default async function signin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { password } = req.body;
  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const user: any = await User.findOne(
          { email: req.body.email },
          function (err, existingUser) {
            if (err) throw err;
          }
        );
        compare(password, user.password, function (err, result) {
          if (!err && result) {
            const claims = { sub: user.id };
            const jwt = sign(claims, secret, {
              expiresIn: "1h"
            });
            res.setHeader(
              "Set-Cookie",
              cookie.serialize("auth", jwt, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                sameSite: "strict",
                maxAge: 3600, 
                path: '/'
              })
            );
            res.json({ message: "You are logged in, welcome" });
          } else {
            res.json({ message: "password doesn't match" });
          }
        });
      } catch (error) {
        res
          .status(400)
          .json({ success: false, message: "we only support POST" });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

import React from "react";
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../middlewares/database";
import User from "../../models/User";
import { authenticated } from "../../components/routeAuthenticate";

const Admin = (): JSX.Element => {
  /* authenticated(async function getUsers(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    await dbConnect();
    const users = await User.find({});
    res.status(200).json({ success: true, data: users });
  });
 */
  return (
    <div className="admin-page">
      <h1> I am the admin page</h1>
    </div>
  );
};

export default Admin;

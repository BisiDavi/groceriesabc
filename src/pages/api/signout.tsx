import cookie from "cookie";
import Router from "next/router";

export const SignoutUser = () => {
  // cookie.remove("auth");
  Router.push("/auth/signin");
};

import cookie from "cookie";
import Router from "next/router";

export const Signout = () => {
  // cookie.remove("auth");
  Router.push("/auth/signin");
};

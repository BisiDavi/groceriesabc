import { NextPageContext } from "next";
import Router from "next/router";
import { myGet } from "./api/getUser";

export default function Orders({ order }: any) {
  return (
    <div className="orderpage">
      List of users that made order {JSON.stringify(order)}
    </div>
  );
}

Orders.getInitialProps = async (ctx: NextPageContext) => {
  const userOrderJson = await myGet("http://localhost:3000/api/users", ctx);
  return { order: userOrderJson };
};

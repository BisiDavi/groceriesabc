import React, { useState } from "react";
import Link from "next/link";
import { apple, orange, pringles, OrderModal } from "../imports";
import style from "../styles/sidebar.module.css";
import { decrementDispatch, incrementDispatch } from "../store/action/action";

const Sidebar = ({ grocery }): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const displayItem = (index: number): JSX.Element => {
    console.log("it was clicked", grocery[index].name);
    switch (grocery[index].name) {
      case "Apple": {
        return <img className={style.appleImg} src={apple} />;
      }
      case "Orange": {
        return <img className={style.orangeImg} src={orange} />;
      }
      case "Pringle": {
        return <img className={style.pringlesImg} src={pringles} />;
      }
      default:
        break;
    }
  };

  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <ul className="list-group">
        {grocery.map((grocery: any) => (
          <li
            className="list-group-item d-flex justify-content-around align-items-center"
            key={grocery.id}
          >
            <div className="cost bg-dark text-white float-left">
              N {grocery.cost}
            </div>
            <div className="controls d-flex justify-content-between align-items-center">
              <button
                onClick={() => incrementDispatch(grocery.id)}
                className="addButton font-weight-bold bg-success border-0"
              >
                +
              </button>
              <h4>{grocery.name}</h4>
              <span className="number badge badge-primary badge-pill">
                {grocery.quantity}
              </span>
              <button
                onClick={() => decrementDispatch(grocery.id)}
                className="subtractButton font-weight-bold bg-danger border-0"
              >
                -
              </button>
              <div className="price bg-dark text-white float-left">
                N {grocery.price}
              </div>
            </div>
            <div className={style.groceryimages}>{displayItem(grocery.id)}</div>
          </li>
        ))}
      </ul>
      <OrderModal modalShow={show} modalClose={handleClose} />
      <button onClick={handleShow} className="btn btn-outline-success m-auto">
        Order
      </button>
      <div className="signup-login mt-5">
        <div className="d-flex justify-content-around m-auto">
          <Link href="/auth/signup">
            <a className="btn btn-outline-danger w-25">Sign up</a>
          </Link>
          <Link href="/auth/signin">
            <a className="btn btn-outline-primary w-25">Sign in</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .sidebar {
            background: #eee;
            color: black;
            width: 25vw;
            height: 100%;
            text-align: center;
            position: absolute;
            right: 0;
            z-index: 100;
            top: 0;
          }
          .sidebar h3 {
            border: 1px solid black;
            background: #eee;
            width: 170px;
            margin: 20px auto;
          }
          .list-group button {
            width: 30px;
          }
          .list-group-item {
            height: 50px;
            margin-bottom: 10px;
            margin-left: 5px;
            margin-right: 5px;
          }
          .list-group span.number {
            position: absolute;
            right: 120px;
            top: 2px;
            background: rgb(20, 10, 200) !important;
          }
          .list-group div.cost {
            height: 50px;
            position: absolute;
            left: 0;
            align-content: center;
            display: flex;
            align-items: center;
            width: 61px;
            padding: 5px;
            background: rgb(20, 10, 80) !important;
          }
          .list-group div.price {
            height: 50px;
            position: absolute;
            right: 0;
            align-content: center;
            display: flex;
            align-items: center;
            width: 61px;
            padding: 5px;
            background: rgb(20, 10, 80) !important;
          }
          .controls {
            width: 60%;
            margin-left: 0px;
          }
          .controls h4 {
            font-size: 18px;
          }
          .groceryimages {
            position: absolute;
            left: -220%;
          }
          .groceryimages .item {
            width: 100px !important;
          }
          .item {
            width: 100px !important;
          }
        `}
      </style>
    </div>
  );
};

export default Sidebar;

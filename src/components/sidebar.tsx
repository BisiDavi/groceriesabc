import React, { useState } from "react";
import { apple, indomie, moet, orange, pringles } from "../imports";
import style from "../styles/sidebar.module.css";

interface Menu {
  id: number;
  name: string;
  price: number;
  count: number;
  cost: number;
}

const Sidebar = (): JSX.Element => {
  const [groceriesData, setGroceriesData] = useState<Menu[]>([
    { id: 0, name: "Apple", price: 100, count: 0, cost: 0 },
    { id: 1, name: "Indomie", price: 200, count: 0, cost: 0 },
    { id: 2, name: "Orange", price: 50, count: 0, cost: 0 },
    { id: 3, name: "Pringle", price: 500, count: 0, cost: 0 },
    { id: 4, name: "Wine", price: 2000, count: 0, cost: 0 }
  ]);

  const displayItem = (index: number): JSX.Element => {
    switch (groceriesData[index].name) {
      case "Apple":
        return <img className={`${style.appleImg} item`} src={apple} />;
      case "Indomie":
        return <img className={`${style.indomieImg} item`} src={indomie} />;
      case "Orange":
        return <img className={`${style.orangeImg} item`} src={orange} />;
      case "Pringle":
        return <img className={`${style.pringlesImg} item`} src={pringles} />;
      case "Wine":
        return <img className={`${style.moetImg} item`} src={moet} />;
      default:
        break;
    }
    return (
      <style jsx>
        {`
          .groceryimages .item {
            width: 100px !important;
          }
        `}
      </style>
    );
  };

  const increaseCount = (index: number): any => {
    const storeData: Menu[] = [...groceriesData];
    let count: number = storeData[index].count + 1;
    let cost: number = storeData[index].price * count;
    storeData[index] = { ...storeData[index], count, cost };
    setGroceriesData([...storeData]);
  };

  const decreaseCount = (index: number): any => {
    const storeData: Menu[] = [...groceriesData];
    if (storeData[index].count > 0) {
      let count: number = storeData[index].count - 1;
      let cost: number = storeData[index].price * count;
      storeData[index] = { ...storeData[index], count, cost };
      setGroceriesData([...storeData]);
    }
  };

  return (
    <div className="sidebar">
      <h3>Menu</h3>
      {}
      <ul className="list-group">
        {groceriesData.map(grocery => (
          <li
            className="list-group-item d-flex justify-content-around align-items-center"
            key={grocery.id}
          >
            <div className="cost bg-dark text-white float-left">
              N {grocery.cost}
            </div>
            <div className="controls d-flex justify-content-between align-items-center">
              <button
                onClick={() => increaseCount(grocery.id)}
                className="addButton font-weight-bold bg-success border-0"
              >
                +
              </button>
              <h4>{grocery.name}</h4>
              <span className="number badge badge-primary badge-pill">
                {grocery.count}
              </span>
              <button
                onClick={() => decreaseCount(grocery.id)}
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
      <button className="btn btn-outline-success m-auto">Order</button>

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

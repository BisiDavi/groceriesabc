import React from "react";

interface Menu {
  id: number;
  name: string;
  price: number;
}

const Sidebar = (): JSX.Element => {
  const menuList: Menu[] = [
    { id: 1, name: "Apple", price: 100 },
    { id: 2, name: "Indomie", price: 200 },
    { id: 3, name: "Orange", price: 50 },
    { id: 4, name: "Pringle", price: 500 },
    { id: 5, name: "Wine", price: 2000 }
  ];
  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <ul className="list-group">
        {menuList.map(list => (
          <li
            className="list-group-item d-flex justify-content-around align-items-center"
            key={list.id}
          >
            <div className="price bg-dark text-white float-left">
              N {list.price}
            </div>
            <div className="controls d-flex justify-content-between align-items-center">
              <button className="addButton font-weight-bold bg-success border-0">
                +
              </button>
              <h4>{list.name}</h4>
              <button className="subtractButton font-weight-bold bg-danger border-0">
                -
              </button>
              <span className="number badge badge-primary badge-pill">0</span>
            </div>
          </li>
        ))}
      </ul>
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
            right: 80px;
            top: 5px;
          }
          .list-group div.price {
            height: 50px;
            position: absolute;
            left: 0;
            align-content: center;
            display: flex;
            align-items: center;
            width: 55px;
          }
          .controls {
            width: 85%;
            margin-left: 50px;
          }
        `}
      </style>
    </div>
  );
};

export default Sidebar;

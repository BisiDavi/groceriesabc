import React from "react";

interface Menu {
  id: number;
  name: string;
}

const Sidebar = (): JSX.Element => {
  const menuList: Menu[] = [
    { id: 1, name: "Jollof Rice" },
    { id: 2, name: "Chicken" },
    { id: 3, name: "Wine" },
    { id: 4, name: "Bottle Water" }
  ];
  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <ul>
        {menuList.map(list => (
          <li key={list.id}>{list.name}</li>
        ))}
      </ul>
      <style jsx>
        {`
          .sidebar {
            background: white;
            color: black;
            width: 20vw;
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
        `}
      </style>
    </div>
  );
};

export default Sidebar;

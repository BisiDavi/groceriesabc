import React from "react";
import { CartImg } from "../imports";

const MainContent = (): JSX.Element => {
  /* const displayItem = (index: number): JSX.Element => {
    console.log("displayItem executed");
    switch (groceriesData[index].name) {
      case "Apple":
        return <img src={apple} />;
      case "Indomie":
        return <img src={indomie} />;
      case "Orange":
        return <img src={orange} />;
      case "Pringle":
        return <img src={pringles} />;
      case "Wine":
        return <img src={moet} />;
      default:
        break;
    }
  }; */

  return (
    <div className="main-app">
      <img src={CartImg} alt="content-table" />
      {/* <div className="groceryimages">{displayItem(grocery.id)}</div> */}
      <style jsx>
        {`
          .main-app img {
            width: 25% !important;
            margin-top: 150px;
            margin-left: 360px;
            z-index: 1000;
            position: absolute;
          }
        `}
      </style>
    </div>
  );
};

export default MainContent;

import { Menu, INCREASE_ORDER,
DECREASE_ORDER } from "../action/action";


const initialState: Menu[] = [
  { id: 0, name: "Apple", price: 100, count: 0, cost: 0 },
  { id: 1, name: "Indomie", price: 200, count: 0, cost: 0 },
  { id: 2, name: "Orange", price: 50, count: 0, cost: 0 },
  { id: 3, name: "Pringle", price: 500, count: 0, cost: 0 },
  { id: 4, name: "Wine", price: 2000, count: 0, cost: 0 }
];

export const countReducer = (state=initialState, action) => {
  const {type} = action;
  switch (type) {
    case INCREASE_ORDER:
      return {

      }
    case DECREASE_ORDER:
      return{

      };
    default:
      break;
  }
}

export const priceReducer = (state=initialState, action) => {

}
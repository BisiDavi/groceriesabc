import { bindActionCreators } from "redux";
import { store } from "../store";
import { INCREASE_GROCERY_ITEM, DECREASE_GROCERY_ITEM } from "../types/types";

const incrementGroceryItem = (index: number): any => {
  return {
    type: INCREASE_GROCERY_ITEM,
    payload: {
      value: index
    }
  };
};
const decrementGroceryItem = (index: number): any => {
  return {
    type: DECREASE_GROCERY_ITEM,
    payload: {
      value: index
    }
  };
};

export const incrementDispatch = bindActionCreators(
  incrementGroceryItem,
  store.dispatch
);
export const decrementDispatch = bindActionCreators(
  decrementGroceryItem,
  store.dispatch
);

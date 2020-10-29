import {
  IncreaseQuantityActionTypes,
  DecreaseQuantityActionTypes,
  MultiplyQuantityActionTypes,
  IGroceryStore,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  MULTIPLY_QUANTITY
} from "../types/types";

export const increaseGroceryQuantity = (
  grocery: IGroceryStore
): IncreaseQuantityActionTypes => {
  return {
    type: INCREASE_QUANTITY,
    payload: {
      value: grocery
    }
  };
};

export const decreaseGroceryQuantity = (
  grocery: IGroceryStore
): DecreaseQuantityActionTypes => {
  return {
    type: DECREASE_QUANTITY,
    payload: {
      value: grocery
    }
  };
};

export const multipleGroceryQuantity = (
  grocery: IGroceryStore
): MultiplyQuantityActionTypes => {
  return {
    type: MULTIPLY_QUANTITY,
    payload: {
      value: grocery
    }
  };
};

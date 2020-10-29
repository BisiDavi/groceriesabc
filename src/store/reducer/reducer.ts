import {
  IGroceryState,
  IncreaseQuantityActionTypes,
  DecreaseQuantityActionTypes,
  MultiplyQuantityActionTypes,
  MULTIPLY_QUANTITY,
  APPLE,
  ORANGE,
  PRINGLE
} from "../types/types";

const initialState: IGroceryState = {
  inventory: [
    { id: 0, name: "Apple", price: 100, quantity: 0, cost: 0 },
    { id: 1, name: "Orange", price: 50, quantity: 0, cost: 0 },
    { id: 2, name: "Pringle", price: 500, quantity: 0, cost: 0 }
  ]
};

export const incrementReducer = (
  state = initialState,
  action: IncreaseQuantityActionTypes
) => {
  const { type, payload } = action;
  switch (type) {
    case APPLE:
      let increasedApple = payload.value.quantity + 1;
      return {
        inventory: [...state.inventory, increasedApple]
      };
    case ORANGE:
      let increasedOrange = payload.value.quantity + 1;
      return {
        inventory: [...state.inventory, increasedOrange]
      };
    case PRINGLE:
      let increasedPringle = payload.value.quantity + 1;
      return {
        inventory: [...state.inventory, increasedPringle]
      };

    default:
      return state;
  }
};

export const decrementReducer = (
  state = initialState,
  action: DecreaseQuantityActionTypes
) => {
  const { type, payload } = action;
  switch (type) {
    case APPLE:
      let decreasedApple = payload.value.quantity - 1;
      return {
        inventory: [...state.inventory, decreasedApple]
      };
    case ORANGE:
      let decreasedOrange = payload.value.quantity - 1;
      return {
        inventory: [...state.inventory, decreasedOrange]
      };
    case PRINGLE:
      let decreasedPringle = payload.value.quantity - 1;
      return {
        inventory: [...state.inventory, decreasedPringle]
      };

    default:
      return state;
  }
};

export const costReducer = (
  state = initialState,
  action: MultiplyQuantityActionTypes
) => {
  const { type, payload } = action;
  switch (type) {
    case APPLE:
      let appleCost = payload.value.quantity * payload.value.price;
      return {
        inventory: [...state.inventory, appleCost]
      };
    case ORANGE:
      let decreasedOrange = payload.value.quantity - 1;
      return {
        inventory: [...state.inventory, decreasedOrange]
      };
    case PRINGLE:
      let decreasedPringle = payload.value.quantity - 1;
      return {
        inventory: [...state.inventory, decreasedPringle]
      };
    default:
      return state;
  }
};

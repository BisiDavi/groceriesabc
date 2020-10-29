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
): IGroceryState => {
  const { type, payload } = action;
  switch (type) {
    case APPLE:
      let appleInventory = payload.value[0];
      const increasedApple = appleInventory.quantity + 1;
      appleInventory = { ...appleInventory, quantity: increasedApple };
      return {
        inventory: [...state.inventory]
      };
    case ORANGE:
      let orangeInventory = payload.value[1];
      const increasedOrange = orangeInventory.quantity + 1;
      orangeInventory = { ...orangeInventory, quantity: increasedOrange };
      return {
        inventory: [...state.inventory]
      };
    case PRINGLE:
      let pringleInventory = payload.value[2];
      const increasedPringle = pringleInventory.quantity + 1;
      pringleInventory = { ...pringleInventory, quantity: increasedPringle };
      return {
        inventory: [...state.inventory]
      };

    default:
      return state;
  }
};

export const decrementReducer = (
  state = initialState,
  action: IncreaseQuantityActionTypes
): IGroceryState => {
  const { type, payload } = action;
  switch (type) {
    case APPLE:
      let appleInventory = payload.value[0];
      const increasedApple = appleInventory.quantity - 1;
      appleInventory = { ...appleInventory, quantity: increasedApple };
      return {
        inventory: [...state.inventory]
      };
    case ORANGE:
      let orangeInventory = payload.value[1];
      const increasedOrange = orangeInventory.quantity - 1;
      orangeInventory = { ...orangeInventory, quantity: increasedOrange };
      return {
        inventory: [...state.inventory]
      };
    case PRINGLE:
      let pringleInventory = payload.value[2];
      const increasedPringle = pringleInventory.quantity - 1;
      pringleInventory = { ...pringleInventory, quantity: increasedPringle };
      return {
        inventory: [...state.inventory]
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
      let appleInventory = payload.value[0];
      const appleCost = appleInventory.quantity * appleInventory.price;
      appleInventory = { ...appleInventory, cost: appleCost };
      return {
        inventory: [state.inventory]
      };
    case ORANGE:
      let orangeInventory = payload.value[1];
      const orangeCost = orangeInventory.quantity * orangeInventory.price;
      orangeInventory = { ...orangeInventory, cost: orangeCost };
      return {
        inventory: [state.inventory]
      };
    case PRINGLE:
      let pringleInventory = payload.value[2];
      const pringleCost = pringleInventory.quantity * pringleInventory.price;
      pringleInventory = { ...pringleInventory, cost: pringleCost };
      return {
        inventory: [state.inventory]
      };
    default:
      return state;
  }
};

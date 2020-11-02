import {
  IGroceryState,
  groceryReducer,
  INCREASE_GROCERY_ITEM,
  DECREASE_GROCERY_ITEM
} from "../types/types";

const initialState: IGroceryState = {
  inventory: [
    { id: 0, name: "Apple", price: 100, quantity: 0, cost: 0 },
    { id: 1, name: "Orange", price: 50, quantity: 0, cost: 0 },
    { id: 2, name: "Pringle", price: 500, quantity: 0, cost: 0 }
  ]
};

export const GroceryReducer = (
  state = initialState,
  action: groceryReducer
): any => {
  const { type, payload } = action;
  switch (type) {
    case INCREASE_GROCERY_ITEM: {
      let newInventory = [...state.inventory];
      let groceryInventory = newInventory[payload.value];
      let increasedItem = groceryInventory.quantity + 1;
      let appleCost = increasedItem * groceryInventory.price;
      groceryInventory = {
        ...groceryInventory,
        quantity: increasedItem,
        cost: appleCost
      };
      newInventory[payload.value] = { ...groceryInventory };
      return {
        inventory: newInventory
      };
    }
    case DECREASE_GROCERY_ITEM: {
      let newInventory = [...state.inventory];
      let groceryInventory = newInventory[payload.value];
      if (groceryInventory.quantity > 0) {
        const decreasedItem = groceryInventory.quantity - 1;
        const newAppleCost = decreasedItem * groceryInventory.price;
        groceryInventory = {
          ...groceryInventory,
          quantity: decreasedItem,
          cost: newAppleCost
        };
        newInventory[payload.value] = { ...groceryInventory };
        return {
          inventory: newInventory
        };
      }
    }
    default:
      return state;
  }
};

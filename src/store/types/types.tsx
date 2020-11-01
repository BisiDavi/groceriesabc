export interface IGroceryStore {
  id: number;
  name: string;
  price: number;
  quantity: number;
  cost: number;
}

export interface IGroceryState {
  inventory: IGroceryStore[];
}

export const INCREASE_GROCERY_ITEM = "INCREASE_GROCERY_ITEM";
export const DECREASE_GROCERY_ITEM = "DECREASE_GROCERY_ITEM";

interface I_increase_item {
  type: typeof INCREASE_GROCERY_ITEM;
  payload: {
    value: number;
  };
}
interface I_decrease_item {
  type: typeof DECREASE_GROCERY_ITEM;
  payload: {
    value: number;
  };
}
export type groceryReducer =
  | I_increase_item
  | I_decrease_item;


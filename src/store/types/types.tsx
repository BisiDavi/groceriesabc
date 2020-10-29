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

export const APPLE = "Apple";
export const ORANGE = "Orange";
export const PRINGLE = "Pringle";

export const increaseQUANTITY = "@grocery/DECREASE_QUANTITY";

export const INCREASE_QUANTITY = APPLE || ORANGE || PRINGLE || increaseQUANTITY;

interface Iincrease_Quantity {
  type: typeof INCREASE_QUANTITY;
  payload: {
    value: IGroceryStore;
  };
}

export const decreaseQUANTITY = "@grocery/DECREASE_QUANTITY";

export const DECREASE_QUANTITY = APPLE || ORANGE || PRINGLE || decreaseQUANTITY;

interface Idecrease_Quantity {
  type: typeof DECREASE_QUANTITY;
  payload: {
    value: IGroceryStore;
  };
}

export const multiplyQUANTITY = "@grocery/MULTIPLY_QUANTITY";
export const MULTIPLY_QUANTITY = APPLE || ORANGE || PRINGLE || multiplyQUANTITY;

interface ImultiplyQuantity {
  type: typeof MULTIPLY_QUANTITY;
  payload: {
    value: IGroceryStore;
  };
}

export type IncreaseQuantityActionTypes = Iincrease_Quantity;
export type DecreaseQuantityActionTypes = Idecrease_Quantity;
export type MultiplyQuantityActionTypes = ImultiplyQuantity;

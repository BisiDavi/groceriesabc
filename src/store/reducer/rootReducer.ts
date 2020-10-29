import { combineReducers } from "redux";
import { incrementReducer, decrementReducer, costReducer } from "./reducer";

const rootReducer = combineReducers({
  increaseGrocery: incrementReducer,
  decreaseGrocery: decrementReducer,
  costGrocery: costReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

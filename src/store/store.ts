import { createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { GroceryReducer } from "./reducer/reducer";

export const store: Store = createStore(GroceryReducer, composeWithDevTools());

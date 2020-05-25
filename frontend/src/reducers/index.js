import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  product: productReducer,
  cart: cartReducer,
  error: errorReducer,
});

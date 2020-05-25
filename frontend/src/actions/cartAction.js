import axios from "axios";
import {
  ADD_TO_CART,
  RESTORE_CART,
  DELETE_CART_PRODUCT,
  ADD_CART_PRODUCT_QTY,
  MINUS_CART_PRODUCT_QTY,
} from "./types";

export const addCartProduct = (item) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: item,
  });
};
export const restoreOldCart = (oldCart, oldPrice) => (dispatch) => {
  dispatch({
    type: RESTORE_CART,
    payload: { products: oldCart, price: oldPrice },
  });
};
export const deleteProduct = (id) => (dispatch) => {
  dispatch({
    type: DELETE_CART_PRODUCT,
    payload: id,
  });
};
export const addQty = (id) => (dispatch) => {
  dispatch({
    type: ADD_CART_PRODUCT_QTY,
    payload: id,
  });
};
export const minusQty = (id) => (dispatch) => {
  dispatch({
    type: MINUS_CART_PRODUCT_QTY,
    payload: id,
  });
};

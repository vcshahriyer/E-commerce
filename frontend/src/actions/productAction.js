import axios from "axios";
import { GET_PRODUCTS, GET_ERRORS, ADD_PRODUCT } from "./types";

export const getProducts = (url = "/api/product/all") => (dispatch) => {
  axios
    .get(url)
    .then((res) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data.result,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.result,
      })
    );
};
export const addProduct = (data) => (dispatch) => {
  axios
    .post("/api/product/add", data, {
      headers: { "Content-type": "multipart/form-data" },
    })
    .then((res) =>
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

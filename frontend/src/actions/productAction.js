import axios from "axios";
import { GET_PRODUCTS, GET_ERRORS } from "./types";

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

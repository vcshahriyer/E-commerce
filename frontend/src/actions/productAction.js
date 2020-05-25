import axios from "axios";
import { GET_PRODUCTS } from "./types";

export const getProducts = (url = "/api/product/all") => (dispatch) => {
  axios
    .get(url)
    .then((res) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data.result,
      })
    )
    .catch(
      (err) => console.log(err)
      //   dispatch({
      //     type: GET_ERRORS,
      //     payload: err.response.data.error,
      //   })
    );
};

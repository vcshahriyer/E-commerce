import { GET_PRODUCTS, ADD_PRODUCT } from "../actions/types";

const initialState = {
  products: [],
  uploadStatus: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        uploadStatus: "success",
      };
    default:
      return state;
  }
}

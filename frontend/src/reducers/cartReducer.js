import {
  ADD_TO_CART,
  RESTORE_CART,
  DELETE_CART_PRODUCT,
  ADD_CART_PRODUCT_QTY,
  MINUS_CART_PRODUCT_QTY,
  EMPTY_CART,
} from "../actions/types";

const initialState = {
  carts: [],
  totalPrice: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      let existed_item = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (existed_item) {
        let totalprice = 0;
        const itemsPlus = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity = item.quantity + 1;
            totalprice += action.payload.price * item.quantity;
            return item;
          } else {
            totalprice += item.price * item.quantity;
            return item;
          }
        });
        localStorage.setItem("cart", JSON.stringify(itemsPlus));
        localStorage.setItem("cartTotalPrice", JSON.stringify(totalprice));
        return {
          ...state,
          carts: itemsPlus,
          totalPrice: totalprice,
        };
      } else {
        const newCart = [...state.carts, action.payload];
        const Tprice =
          state.totalPrice + action.payload.quantity * action.payload.price;
        localStorage.setItem("cart", JSON.stringify(newCart));
        localStorage.setItem("cartTotalPrice", JSON.stringify(Tprice));

        return {
          ...state,
          carts: newCart,
          totalPrice: Tprice,
        };
      }
    case RESTORE_CART:
      return {
        ...state,
        carts: action.payload.products,
        totalPrice: action.payload.price,
      };
    case DELETE_CART_PRODUCT:
      const deletedItem = state.carts.filter(
        (item) => item.id != action.payload
      );
      const priceAfterDel = deletedItem.map(
        (item) => item.quantity * item.price
      );
      const TempTotal = priceAfterDel.reduce((a, b) => a + b, 0);
      localStorage.setItem("cart", JSON.stringify(deletedItem));
      localStorage.setItem("cartTotalPrice", JSON.stringify(TempTotal));
      return {
        ...state,
        carts: deletedItem,
        totalPrice: TempTotal,
      };
    case ADD_CART_PRODUCT_QTY:
      let qtyTotal = 0;
      const items = state.carts.map((item) => {
        if (item.id === action.payload) {
          item.quantity = item.quantity + 1;
          qtyTotal += item.price * item.quantity;
          return item;
        } else {
          qtyTotal += item.price * item.quantity;
          return item;
        }
      });
      localStorage.setItem("cart", JSON.stringify(items));
      localStorage.setItem("cartTotalPrice", JSON.stringify(qtyTotal));
      return {
        ...state,
        carts: items,
        totalPrice: qtyTotal,
      };
    case MINUS_CART_PRODUCT_QTY:
      let mnsTotal = 0;
      const Mitems = state.carts.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          item.quantity = item.quantity - 1;
          mnsTotal += item.price * item.quantity;
          return item;
        } else {
          mnsTotal += item.price * item.quantity;
          return item;
        }
      });
      localStorage.setItem("cart", JSON.stringify(Mitems));
      localStorage.setItem("cartTotalPrice", JSON.stringify(mnsTotal));
      return {
        ...state,
        carts: Mitems,
        totalPrice: mnsTotal,
      };
    case EMPTY_CART:
      localStorage.setItem("cart", JSON.stringify([]));
      localStorage.setItem("cartTotalPrice", JSON.stringify(0));
      return {
        ...state,
        carts: [],
        totalPrice: 0,
      };
    default:
      return state;
  }
}

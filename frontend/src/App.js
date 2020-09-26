import React, { Fragment } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/css/App.css";
import ShopPage from "./components/shopPage";
import CheckoutPage from "./components/checkoutPage";
import SuccessPage from "./components/common/successPage";
import ProductUpload from "./components/productUpload";
import { restoreOldCart } from "./actions/cartAction";

if (localStorage.cart) {
  store.dispatch(
    restoreOldCart(
      JSON.parse(localStorage.cart),
      JSON.parse(localStorage.cartTotalPrice)
    )
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component={ShopPage}></Route>
          <Route exact path="/checkout" component={CheckoutPage}></Route>
          <Route exact path="/success" component={SuccessPage}></Route>
          <Route exact path="/addProduct" component={ProductUpload}></Route>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;

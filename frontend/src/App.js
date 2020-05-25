import React, { Fragment } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/App.css";
import ShopPage from "./components/shopPage";
import CheckoutPage from "./components/checkoutPage";
import { restoreOldCart } from "./actions/cartAction";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

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
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;

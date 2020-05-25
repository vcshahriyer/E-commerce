import React, { Component, Fragment } from "react";
import "../assets/css/checkout.css";
import { connect } from "react-redux";
import SideCart from "./common/sideCart";

class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { carts, totalPrice } = this.props.cart;
    return (
      <Fragment>
        <h2>Please fill the Checkout Form</h2>
        <div className="row">
          <div className="col-50">
            <div className="container">
              <form>
                <div className="row">
                  <div className="col-50">
                    <h3>Billing Address</h3>
                    <label htmlFor="fname">Full Name</label>
                    <input
                      type="text"
                      id="fname"
                      name="name"
                      placeholder="John M. Doe"
                    />
                    <label htmlFor="mobile">Mobile</label>
                    <input
                      type="text"
                      id="mobile"
                      name="mobile"
                      placeholder="01XXXXXXXXX"
                    />
                    <label htmlFor="adr">Address</label>
                    <input
                      type="text"
                      id="adr"
                      name="address"
                      placeholder="542 W. 15th Street"
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  value="Place an Order"
                  className="cart-order-btn hover blue"
                />
              </form>
            </div>
          </div>
          <div className="col-25">
            <div className="container">
              <h4>
                Cart{" "}
                <span className="price">
                  <i className="fa fa-shopping-cart"></i> <b>4</b>
                </span>
              </h4>
              <SideCart cart={carts} totalPrice={totalPrice}></SideCart>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, null)(CheckoutPage);

import React, { Component, Fragment } from "react";
import "../assets/css/checkout.css";
import { connect } from "react-redux";
import SideCart from "./common/sideCart";
import { placeOrder } from "../actions/cartAction";
import _ from "lodash";
class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
      address: "",
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { carts, totalPrice } = this.props.cart;
    if (carts && carts.length <= 0) {
      alert("Cart is empty, Please add product to place order.");
    } else {
      const data = {
        name: this.state.name,
        mobile: this.state.mobile,
        address: this.state.address,
        products: JSON.stringify(carts),
        totalPrice: totalPrice,
      };
      this.props.placeOrder(data);
    }
  };
  handleCloseBtn = (e) => {
    e.target.parentElement.style.display = "none";
  };
  render() {
    const { carts, totalPrice } = this.props.cart;
    const { errors } = this.props.error;
    return (
      <Fragment>
        <h2>Please fill the Checkout Form</h2>
        <div className="row">
          <div className="col-50">
            <div className="container">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-50">
                    <h3>Billing Address</h3>
                    <label htmlFor="fname">Full Name</label>
                    <input
                      type="text"
                      id="fname"
                      name="name"
                      required
                      placeholder="John M. Doe"
                      onChange={this.onChange}
                      value={this.state.name}
                    />
                    <label htmlFor="mobile">Mobile</label>
                    <input
                      type="text"
                      id="mobile"
                      name="mobile"
                      required
                      placeholder="01XXXXXXXXX"
                      onChange={this.onChange}
                      value={this.state.mobile}
                    />
                    <label htmlFor="adr">Address</label>
                    <input
                      type="text"
                      id="adr"
                      name="address"
                      required
                      placeholder="542 W. 15th Street"
                      onChange={this.onChange}
                      value={this.state.address}
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  value="Place an Order"
                  className="cart-order-btn hover blue"
                />
              </form>
              {!_.isEmpty(errors) ? (
                <div className="alert danger">
                  <span className="closebtn" onClick={this.handleCloseBtn}>
                    &times;
                  </span>
                  <strong>Danger!</strong> <br />
                  {_.map(errors.errors, (value, key) => {
                    return (
                      <Fragment key={key}>
                        {value.message} <br />
                      </Fragment>
                    );
                  })}
                </div>
              ) : null}
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
  error: state.error,
});

export default connect(mapStateToProps, { placeOrder })(CheckoutPage);

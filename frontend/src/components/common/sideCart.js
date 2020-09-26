import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  deleteProduct,
  addQty,
  minusQty,
  emptyCart,
} from "../../actions/cartAction";
import { Link } from "react-router-dom";
import { APIURL } from "../../config";

class SideCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const carts = this.props.cart;
    const orderBtn = this.props.orderBtn;
    const totalPrice = this.props.totalPrice;
    return (
      <Fragment>
        <div className="cart-wrapper">
          <div className="cart-header">
            <h2>Your Cart</h2>{" "}
            <span onClick={this.props.emptyCart} className="cart-empty-i">
              <FontAwesomeIcon icon={faTrashAlt} />
            </span>
          </div>
          {carts && carts.length > 0
            ? carts.map((item, key) => {
                return (
                  <div key={key} className="cart-product">
                    <img src={`${APIURL}/images/${item.image}`} alt="" />
                    <p>
                      <span
                        onClick={() => this.props.minusQty(item.id)}
                        className="cart-count-btn"
                      >
                        <FontAwesomeIcon icon={faMinusCircle} />
                      </span>
                      <span id="cartCount">{item.quantity}</span>
                      <span
                        onClick={() => this.props.addQty(item.id)}
                        className="cart-count-btn"
                      >
                        <FontAwesomeIcon icon={faPlusCircle} />
                      </span>
                      {"    " + item.name}
                      <br />
                      Price: {item.price * item.quantity}$
                    </p>
                    <span
                      onClick={() => this.props.deleteProduct(item.id)}
                      className="cart-remove-i"
                    >
                      <FontAwesomeIcon icon={faTimesCircle} />
                    </span>
                  </div>
                );
              })
            : null}
          <div className="cart-footer">
            {orderBtn ? (
              <Link to="/checkout" className="cart-order-btn hover blue">
                Place Order
              </Link>
            ) : null}
            Grand Total: {totalPrice}$
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(null, { deleteProduct, addQty, minusQty, emptyCart })(
  SideCart
);

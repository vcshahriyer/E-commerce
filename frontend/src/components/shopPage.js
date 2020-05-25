import React, { Component, Fragment } from "react";
import ProductCard from "./common/productCard";
import SideCart from "./common/sideCart";
import { connect } from "react-redux";
import { getProducts } from "../actions/productAction";
class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { products } = this.props.product;
    const { carts, totalPrice } = this.props.cart;
    return (
      <Fragment>
        <div className="rs-container">
          <div className="products">
            {products
              ? products.map((product, key) => {
                  return (
                    <ProductCard
                      key={key}
                      product={product}
                      cart={carts}
                    ></ProductCard>
                  );
                })
              : null}
          </div>
          <div className="cart">
            <SideCart
              cart={carts}
              totalPrice={totalPrice}
              orderBtn={true}
            ></SideCart>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product,
  cart: state.cart,
});

export default connect(mapStateToProps, { getProducts })(ShopPage);

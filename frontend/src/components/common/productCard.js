import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { addCartProduct } from "../../actions/cartAction";
import { connect } from "react-redux";
import _ from "lodash";
const ProductCard = ({ product, addCartProduct, cart }) => {
  const onClick = useCallback(
    (e) => {
      e.preventDefault();
      const data = {
        id: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1,
      };
      addCartProduct(data);
    },
    [product, addCartProduct]
  );
  console.log(_.findIndex(cart, { id: product._id }));

  return (
    <figure className="product-card">
      <img
        src={`http://localhost:3000/images/${product.image}`}
        alt="sample57"
      />
      <figcaption>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="price">${product.price}</div>
      </figcaption>
      <span onClick={onClick}>
        {_.findIndex(cart, { id: product._id }) === -1 ? (
          <FontAwesomeIcon icon={faCartPlus} />
        ) : (
          <FontAwesomeIcon icon={faCheckCircle} />
        )}
      </span>
    </figure>
  );
};
export default connect(null, { addCartProduct })(ProductCard);

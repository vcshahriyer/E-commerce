import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { addCartProduct } from "../../actions/cartAction";
const ProductCard = ({ product, addCartProduct }) => {
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
    [product]
  );

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
        <FontAwesomeIcon icon={faCartPlus} />
      </span>
    </figure>
  );
};
export default connect(null, { addCartProduct })(ProductCard);

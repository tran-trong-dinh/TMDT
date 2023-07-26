import React from "react";

import "./Product.scss";
import { Link } from "react-router-dom";
const Product = ({ product, id }) => {
  const { image_url, product_name, old_price, new_price } = product;
  return (
    <div className="product-card">
      <Link className="thumbnail" to={`/product/${id}`}>
        <img src={image_url} alt="product_image" />
      </Link>
      <div className="prod-details">
        <span className="name">{product_name}</span>
        {new_price ? (
          <>
            <span className="price">
              <del>&#36;{old_price}</del>
            </span>
            <span className="price">&#36;{new_price}</span>
          </>
        ) : (
          <>
            <span className="price">&#36;{old_price}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;

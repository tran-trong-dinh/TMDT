import "./Products.scss";
import Product from "./Product/Product";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <>
      {products.length > 0 ? (
        <div className="products-container">
          <div className="products">
            {products.map((product) => (
              <Product
                key={product.product_id}
                product={product}
                id={product.product_id}
              />
            ))}
          </div>
          {products.length > 4 && <Link className="see-more ">See more</Link>}
        </div>
      ) : (
        <div>
          <h1>No Products Found</h1>
        </div>
      )}
    </>
  );
};

export default Products;

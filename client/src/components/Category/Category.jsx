import axios from "axios";
import Products from "../Products/Products";
import "./Category.scss";
import { useEffect, useState } from "react";
import Filter from "../Filter/Filter";
import Product from "../Products/Product/Product";
const Category = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/product/get-products").then((res) => {
      setProducts(res.data);
    });
  });
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="left">
          <Filter />
        </div>
        <div className="right">
          <div className="category-title">All Products</div>
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
              </div>
            ) : (
              <div>
                <h1>No Products Found</h1>
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Category;

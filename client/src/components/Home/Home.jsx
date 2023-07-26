import React, { useEffect, useState } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("/category/get-categories").then((res) => {
      setCategories(res.data);
    });
  });

  useEffect(() => {
    axios.get("/product/get-products").then((res) => {
      setProducts(res.data);
    });
  });
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <div className="sec-heading">Popular Products</div>
          <Products products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;

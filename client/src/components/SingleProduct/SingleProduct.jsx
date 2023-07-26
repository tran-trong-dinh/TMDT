import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { FaCartPlus } from "react-icons/fa";
import "./SingleProduct.scss";
import axios from "axios";
import Products from "../Products/Products";
import Review from "./Review/Review";

const SingleProduct = () => {
  // const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  // const { handleAddToCart } = useContext(Context);
  useEffect(() => {
    axios.get(`/product/get-detail-product/${id}`).then((res) => {
      setProduct(res.data[0]);
    });
  }, [id]);

  useEffect(() => {
    axios
      .get(`/product/get-related-products/${product.category_id}/${id}`)
      .then((res) => {
        setRelatedProducts(res.data);
      });
  }, [id, product.category_id]);

  //   const decrement = () => {
  //     setQuantity((prevState) => {
  //       if (prevState === 1) return 1;
  //       return prevState - 1;
  //     });
  //   };
  //   const increment = () => {
  //     setQuantity((prevState) => prevState + 1);
  //   };

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={product.image_url} />
          </div>
          <div className="right">
            <span className="name">{product.product_name}</span>

            {product.new_price ? (
              <>
                <span className="price">&#8377;{product.old_price}</span>
                <span className="price">&#8377;{product.new_price}</span>
              </>
            ) : (
              <span className="price">&#8377;{product.old_price}</span>
            )}

            <span className="desc">{product.description}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                {/* <span onClick={decrement}>-</span> */}
                {/* <span>{quantity}</span> */}
                {/* <span onClick={increment}>+</span> */}
              </div>
              <button
                className="add-to-cart-button"
                // onClick={() => {
                //   handleAddToCart(data?.data?.[0], quantity);
                //   setQuantity(1);
                // }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />
            {/* <div className="info-item">
              <span className="text-bold">
                Category:{" "}
                <span>{product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div> */}
          </div>
        </div>
        <div className="sec-heading">Reviews</div>
        <Review productId={product.product_id} />
        <div className="sec-heading">Related Products</div>
        <Products products={relatedProducts} />
      </div>
    </div>
  );
};

export default SingleProduct;

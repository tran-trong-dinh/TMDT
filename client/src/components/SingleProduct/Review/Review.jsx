import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import "./Review.scss";
import user_avatar from "../../../assets/newsletter-bg.jpeg";

const Review = ({ productId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`/review/get-reviews-of-product/${productId}`).then((res) => {
      setReviews(res.data);
    });
  }, [productId]);

  return (
    <div className="review-container">
      <div className="input-review">
        <p>Score</p>
        <div className="score">
          <AiOutlineStar className="star" />
          <AiOutlineStar className="star" />
          <AiOutlineStar className="star" />
          <AiOutlineStar className="star" />
          <AiOutlineStar className="star" />
        </div>
        <textarea type="text" placeholder="Write a review" />
        <button>Comment</button>
      </div>
      <div className="list-reviews">
        <h2>List Reviews</h2>

        {reviews.length > 0 ? (
          <div className="reviews">
            {reviews.map((review) => (
              <div className="review" key={review.review_id}>
                <div className="info-user">
                  <div className="user-review">
                    <img src={user_avatar} alt="avatar-user" />
                    <p>User Name</p>
                  </div>
                  <div className="score">
                    <AiOutlineStar className="star" />
                    <AiOutlineStar className="star" />
                    <AiOutlineStar className="star" />
                    <AiOutlineStar className="star" />
                    <AiOutlineStar className="star" />
                  </div>
                </div>
                <p className="time">Thời gian</p>
                <p className="review-text">{review.review_text}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text">No reviews</p>
        )}
      </div>
    </div>
  );
};

export default Review;

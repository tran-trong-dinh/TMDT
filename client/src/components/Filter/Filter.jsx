import React from "react";
import "./Filter.scss";
import { BiDollar } from "react-icons/bi";

const Filter = () => {
  return (
    <div className="filter-container">
      <div className="categories">
        <h3>Categories</h3>
        <div className="option">
          <input type="checkbox" />
          <span>One Piece</span>
        </div>
        <div className="option">
          <input type="checkbox" />
          <span>Naruto</span>
        </div>
        <div className="option">
          <input type="checkbox" />
          <span>Demon Slayer</span>
        </div>
        <div className="option">
          <input type="checkbox" />
          <span>Dragon Ball</span>
        </div>
      </div>
      <div className="price">
        <h3>Price</h3>
        <div className="min-max">
          <div className="min">
            <BiDollar size={20} />
            <input type="text" placeholder="Min" />
          </div>
          <span>-</span>
          <div className="max">
            <BiDollar size={20} />
            <input type="text" placeholder="Max" />
          </div>
        </div>
      </div>

      <button>Apply</button>
    </div>
  );
};

export default Filter;

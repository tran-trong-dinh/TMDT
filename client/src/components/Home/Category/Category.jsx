import "./Category.scss";

import { Link } from "react-router-dom";

const Category = ({ categories }) => {
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories.map((category) => (
          <Link
            to={`/product/catagories/${category.category_id}`}
            className="category"
            key={category.category_id}
          >
            <img src={category.img_category} />
            <p>{category.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;

import db from "../connectDB.js";

import asyncHandler from "express-async-handler";

// Category
export const createProduct = asyncHandler(async (req, res) => {
  const {
    product_name,
    old_price,
    description,
    image_url,
    category_id,
    promotion_id,
  } = req.body;
  let new_price;
  if (promotion_id) {
    const q1 = "SELECT * FROM promotions WHERE promotion_id = ?";
    db.query(q1, [promotion_id], (err, data) => {
      if (err) return res.json(err);
      new_price = (old_price * (100 - data[0].discount)) / 100;
      const q =
        "INSERT INTO products(`product_name`, `old_price`, `description`, `image_url`, `category_id` , `promotion_id`, `new_price`) VALUES (?)";
      const values = [
        product_name,
        old_price,
        description,
        image_url,
        category_id,
        promotion_id,
        new_price,
      ];

      db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json("Product has been created");
      });
    });
  } else {
    new_price = null;
    const q =
      "INSERT INTO products(`product_name`, `old_price`, `description`, `image_url`, `category_id` , `promotion_id`, `new_price`) VALUES (?)";
    const values = [
      product_name,
      old_price,
      description,
      image_url,
      category_id,
      promotion_id,
      new_price,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("Product has been created");
    });
  }
});

export const getProducts = asyncHandler((req, res) => {
  const q = "SELECT * FROM products ORDER BY create_date DESC";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
});

export const getProductsFromCategory = asyncHandler((req, res) => {
  const q = "SELECT * FROM products WHERE category_id = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
});

export const updateProduct = asyncHandler((req, res) => {
  const { id } = req.params;
  const { product_name, old_price, description, image_url, category_id } =
    req.body;
  const q =
    "UPDATE products SET `product_name` = ?, `old_price` = ?, `description` = ?, `image_url` = ?, `category_id`= ? WHERE product_id = ?";

  db.query(
    q,
    [product_name, old_price, description, image_url, category_id, id],
    (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("Product has been updated");
    }
  );
});

export const deleteProduct = asyncHandler((req, res) => {
  const q = "DELETE FROM products WHERE product_id = ?";
  const values = [req.params.id];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json("Product has been deleted");
  });
});

export const getDetailProduct = asyncHandler((req, res) => {
  const q = "SELECT * FROM products WHERE product_id = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
});

export const getRelatedProducts = asyncHandler((req, res) => {
  const q =
    "SELECT * FROM products WHERE category_id = ? AND product_id != ? ORDER BY create_date DESC  LIMIT 4 ";
  db.query(q, [req.params.category_id, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
});

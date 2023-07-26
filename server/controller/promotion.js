import asyncHandler from "express-async-handler";
import db from "../connectDB.js";

export const createPromotion = asyncHandler((req, res) => {
  const { promotion_name, discount } = req.body;
  const q =
    "INSERT INTO promotions(`promotion_name`, `discount`) VALUES (?, ?)";
  db.query(q, [promotion_name, discount], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json("Promotion has been created");
  });
});

export const getPromotions = asyncHandler((req, res) => {
  const q = "SELECT * FROM promotions";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
});

export const updatePromotion = asyncHandler((req, res) => {
  const { id } = req.params;
  const { promotion_name, discount } = req.body;
  const q =
    "UPDATE promotions SET `promotion_name` = ?, `discount` = ? WHERE promotion_id = ?";
  db.query(q, [promotion_name, discount, id], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json("Promotion has been updated");
  });
});

export const deletePromotion = asyncHandler((req, res) => {
  const { id } = req.params;
  const q = "DELETE FROM promotions WHERE promotion_id = ?";
  db.query(q, [id], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json("Promotion has been deleted");
  });
});

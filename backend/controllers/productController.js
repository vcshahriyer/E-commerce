const productModel = require("../models/productModel");
const mongoose = require("mongoose");

module.exports = {
  create: (req, res) => {
    let product = new productModel({
      _id: new mongoose.Types.ObjectId().toHexString(),
      name: req.body.name,
      quantity: req.body.quantity,
      description: req.body.description,
      price: req.body.price,
      image: req.file.filename,
    });

    product
      .save()
      .then((result) => {
        res.json({ success: true, result: result });
      })
      .catch((err) => {
        res.status(400);
        res.json({ success: false, result: err });
      });
  },
  allProduct: (req, res) => {
    productModel.find().then((products) => {
      if (!products) {
        res.status(400);
        res.json({ success: false, result: "No Product found !" });
      }
      res.json({ success: true, result: products });
    });
  },
};

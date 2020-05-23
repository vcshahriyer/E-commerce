const orderModel = require("../models/orderModel");
const mongoose = require("mongoose");

module.exports = {
  create: (req, res) => {
    let order = new orderModel({
      _id: new mongoose.Types.ObjectId().toHexString(),
      name: req.body.name,
      mobile: req.body.mobile,
      address: req.body.address,
      products: req.body.products,
    });
    order
      .save()
      .then((result) => {
        res.json({ success: true, result: result });
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },
  update: (req, res) => {
    orderModel
      .update({ _id: req.body._id }, req.body)
      .then((recipe) => {
        if (!recipe | (recipe.n === 0))
          res.json({ success: false, result: "No recipe found !" });
        res.json({ success: true, result: recipe });
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },
};

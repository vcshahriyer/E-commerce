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
      totalPrice: req.body.totalPrice,
    });
    order
      .save()
      .then((result) => {
        res.json({ success: true, result: result });
      })
      .catch((err) => {
        res.status(400);
        res.json({ success: false, result: err });
      });
  },
};

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
      image: req.file.path,
    });

    product
      .save()
      .then((result) => {
        res.json({ success: true, result: result });
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },
  allProduct: (req, res) => {
    productModel.find().then((products) => {
      if (!products) res.json({ success: false, result: "No Product found !" });
      res.json({ success: true, result: products });
    });
  },
  update: (req, res) => {
    productModel
      .update(
        { _id: req.body._id },
        { $push: { restockHistory: req.body.restockHistory } }
      )
      .then((ingredient) => {
        if (!ingredient)
          res.json({ success: false, result: "No Ingredient found !" });
        res.json({ success: true, result: ingredient });
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },
  delete: (req, res) => {
    // Delete ingredient implementing cascadeing to delete dependency
    productModel.findById({ _id: req.params.id }, (err, ingredient) => {
      RecipeModel.update(
        { Ingredients: { $elemMatch: { _id: ingredient._id } } }, // matching ingredient _id to all other recipe which has that ingredient as dependency.
        { $pull: { Ingredients: { _id: ingredient._id } } } // deletingn the ref dependency of deleted ingredient
      )
        .then((resp) => {
          if (!resp)
            res.json({ success: false, result: "No Ingredient found !" });
          ingredient.remove();
          res.json({ success: true, result: "Delete successful !" });
        })
        .catch((err) => {
          res.json({ success: false, result: err });
        });
    });
  },
};
